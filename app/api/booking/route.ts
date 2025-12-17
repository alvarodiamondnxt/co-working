import { NextRequest, NextResponse } from "next/server";
import { sendBookingConfirmation, sendBookingNotificationToOwner } from "@/lib/email";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  space: z.string().min(1, "Space type is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const bookingData = bookingSchema.parse(body);

    // Send confirmation email to user
    const userEmailSent = await sendBookingConfirmation(
      bookingData.email,
      bookingData.name,
      {
        space: bookingData.space,
        date: bookingData.date,
        time: bookingData.time,
        phone: bookingData.phone,
      }
    );

    // Send notification email to owner
    const ownerEmailSent = await sendBookingNotificationToOwner(bookingData);

    if (!userEmailSent || !ownerEmailSent) {
      console.error("Failed to send one or more emails");
      return NextResponse.json(
        { error: "Booking received but email sending failed. Please contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully. Confirmation email sent.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid booking data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Error processing booking" },
      { status: 500 }
    );
  }
}

