import { cookies } from 'next/headers';
import { prisma } from './prisma';

export async function createSession(userId: string) {
  const sessionToken = crypto.randomUUID();
  const expires = new Date();
  expires.setDate(expires.getDate() + 30); // 30 días

  await prisma.session.create({
    data: {
      sessionToken,
      userId,
      expires,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set('session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires,
  });

  return sessionToken;
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session')?.value;
  
  if (!sessionToken) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: { sessionToken },
    include: { user: true },
  });

  if (!session || session.expires < new Date()) {
    return null;
  }

  return {
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    },
  };
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session')?.value;
  
  if (sessionToken) {
    await prisma.session.deleteMany({
      where: { sessionToken },
    });
  }

  cookieStore.delete('session');
}

