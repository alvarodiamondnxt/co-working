import { prisma } from './prisma';
import bcrypt from 'bcryptjs';
import { sendVerificationCode, sendWelcomeEmail } from './email';

export async function generateVerificationCode(): Promise<string> {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function createUser(email: string, password: string, name: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // Generate and send verification code
  const code = await generateVerificationCode();
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10);

  await prisma.verificationCode.create({
    data: {
      code,
      email,
      userId: user.id,
      expiresAt,
    },
  });

  await sendVerificationCode(email, code);

  return user;
}

export async function verifyCode(email: string, code: string) {
  const verificationCode = await prisma.verificationCode.findFirst({
    where: {
      email,
      code,
      used: false,
      expiresAt: {
        gt: new Date(),
      },
    },
    include: {
      user: true,
    },
  });

  if (!verificationCode) {
    return null;
  }

  // Mark code as used
  await prisma.verificationCode.update({
    where: { id: verificationCode.id },
    data: { used: true },
  });

  // Update user email as verified
  const user = await prisma.user.update({
    where: { id: verificationCode.user!.id },
    data: { emailVerified: new Date() },
  });

  // Send welcome email
  await sendWelcomeEmail(user.email, user.name || 'Usuario');

  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }

  // Generate 2FA code
  const code = await generateVerificationCode();
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10);

  await prisma.verificationCode.create({
    data: {
      code,
      email,
      userId: user.id,
      expiresAt,
    },
  });

  await sendVerificationCode(email, code);

  return { user, requires2FA: true };
}

export async function verifyLoginCode(email: string, code: string) {
  const verificationCode = await prisma.verificationCode.findFirst({
    where: {
      email,
      code,
      used: false,
      expiresAt: {
        gt: new Date(),
      },
    },
    include: {
      user: true,
    },
  });

  if (!verificationCode) {
    return null;
  }

  // Mark code as used
  await prisma.verificationCode.update({
    where: { id: verificationCode.id },
    data: { used: true },
  });

  return verificationCode.user;
}

