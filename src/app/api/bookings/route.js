import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/db";
import Booking from "@/lib/models/Booking";
import Celebrity from "@/lib/models/Celebrity";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { celebrityId, bookingType, amount, notes, scheduledDate } =
      await req.json();

    if (!celebrityId || !bookingType || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify celebrity exists
    const celebrity = await Celebrity.findById(celebrityId);
    if (!celebrity) {
      return NextResponse.json(
        { error: "Celebrity not found" },
        { status: 404 }
      );
    }

    // Verify booking type is available
    const bookingTypeData = celebrity.bookingTypes?.[bookingType];
    if (!bookingTypeData?.available) {
      return NextResponse.json(
        { error: "This booking type is not available" },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      user: session.user.id,
      celebrity: celebrityId,
      bookingType,
      amount,
      notes,
      scheduledDate: scheduledDate || null,
      status: "pending",
      paymentStatus: "unpaid",
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    console.error("BOOKING ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create booking" },
      { status: 500 }
    );
  }
}