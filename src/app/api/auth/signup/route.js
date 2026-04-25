import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("SIGNUP BODY RECEIVED:", body);

    const { name, email, password } = body;

    if (!name || !email || !password) {
      console.log("MISSING FIELDS:", { name, email, password });
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Account created successfully", userId: user._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR DETAILS:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}