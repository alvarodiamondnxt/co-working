import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = loginSchema.parse(body);

    const result = await loginUser(email, password);

    if (!result) {
      return NextResponse.json(
        { error: "Incorrect email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      requires2FA: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Error logging in" },
      { status: 500 }
    );
  }
}

