import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import resend from "@/lib/resend";

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("SIGNUP BODY RECEIVED:", body);

    const { name, email, password, phone, country } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
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
    const verificationCode = generateCode();
    const verificationExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // Auto verify until domain is purchased
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone: phone || "",
      country: country || "",
      isVerified: true,
      verificationCode,
      verificationExpiry,
    });

    // Send welcome email to admin (for now)
    try {
      await resend.emails.send({
        from: "StarReach <onboarding@resend.dev>",
        to: "starreach02@gmail.com",
        subject: "🔔 New User Signup — StarReach",
        html: `
          <!DOCTYPE html>
          <html>
            <body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
              <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
                <div style="background:#000000;padding:24px;text-align:center;">
                  <h1 style="color:#ffffff;margin:0;font-size:20px;">🔔 New User Signup</h1>
                  <p style="color:#9ca3af;margin:4px 0 0;font-size:13px;">StarReach Admin</p>
                </div>
                <div style="padding:24px;">
                  <p style="color:#6b7280;font-size:14px;margin:0 0 20px;">
                    A new user has signed up on StarReach!
                  </p>
                  <div style="background:#f9fafb;border-radius:12px;padding:20px;margin-bottom:20px;">
                    <table style="width:100%;border-collapse:collapse;">
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Name</td>
                        <td style="color:#111827;font-size:13px;font-weight:600;text-align:right;">${name}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Email</td>
                        <td style="color:#111827;font-size:13px;font-weight:600;text-align:right;">${email}</td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Phone</td>
                        <td style="color:#111827;font-size:13px;font-weight:600;text-align:right;">${phone}</td>
                      </tr>
                      ` : ""}
                      ${country ? `
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Country</td>
                        <td style="color:#111827;font-size:13px;font-weight:600;text-align:right;">${country}</td>
                      </tr>
                      ` : ""}
                    </table>
                  </div>
                  <div style="text-align:center;">
                    <a href="https://starreach.vercel.app/admin/users"
                       style="display:inline-block;background:#000;color:#fff;padding:12px 28px;border-radius:100px;text-decoration:none;font-size:14px;font-weight:600;">
                      View in Admin Panel
                    </a>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Welcome email failed:", emailError);
    }

    return NextResponse.json(
      {
        message: "Account created successfully!",
        userId: user._id,
        email: user.email,
      },
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