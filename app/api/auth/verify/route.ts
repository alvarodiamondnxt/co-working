import { NextRequest, NextResponse } from "next/server";
import { verifyCode, verifyLoginCode } from "@/lib/auth";
import { createSession } from "@/lib/session";
import { z } from "zod";

const verifySchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
  isLogin: z.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, code, isLogin } = verifySchema.parse(body);

    let user;
    if (isLogin) {
      user = await verifyLoginCode(email, code);
    } else {
      user = await verifyCode(email, code);
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired code" },
        { status: 400 }
      );
    }

    // Create session if it's a login
    if (isLogin) {
      await createSession(user.id);
    }

    return NextResponse.json({
      success: true,
      message: isLogin ? "Session started successfully" : "Email verified successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Error verifying code" },
      { status: 500 }
    );
  }
}

