import { NextResponse } from "next/server";
import { signIn } from "@/auth";
import { entityPrisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { email, password } = formData;

    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await entityPrisma.user.findUnique({
      where: {
        email: email
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email", success: false },
        { status: 401 }
      );
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("Auth result:", result);

    if (!result || result.error) {
      return NextResponse.json(
        { 
          message: "Invalid credentials", 
          success: false,
          error: result?.error 
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { 
        message: "Authentication failed", 
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}