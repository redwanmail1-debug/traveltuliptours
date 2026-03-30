import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, date, guests, tour, pickup, message } = body;

  const tourLabels: Record<string, string> = {
    keukenhof: "Keukenhof Tulip Gardens",
    "zaanse-schans": "Zaanse Schans Windmills",
    giethoorn: "Giethoorn Village",
    amsterdam: "Amsterdam City Tour",
    kinderdijk: "Kinderdijk Windmills",
    volendam: "Volendam & Marken",
    custom: "Custom Tour",
  };

  const tourName = tourLabels[tour] || tour || "Not specified";

  try {
    await resend.emails.send({
      from: "TravelTulipTours Booking <bookings@traveltuliptours.nl>",
      to: "info@traveltuliptours.nl",
      replyTo: email,
      subject: `New Booking Request – ${tourName} – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4332; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Booking Request</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332; width: 140px;">Name</td><td style="padding: 10px 0;">${name}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Email</td><td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Phone</td><td style="padding: 10px 0;">${phone || "—"}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Tour</td><td style="padding: 10px 0;">${tourName}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Date</td><td style="padding: 10px 0;">${date}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Guests</td><td style="padding: 10px 0;">${guests}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332;">Pickup</td><td style="padding: 10px 0;">${pickup || "—"}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #1B4332; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message || "—"}</td></tr>
            </table>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
            <p style="color: #888; font-size: 13px; margin: 0;">Reply directly to this email to contact the customer.</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the customer
    await resend.emails.send({
      from: "TravelTulipTours <info@traveltuliptours.nl>",
      to: email,
      subject: `Booking Request Received – ${tourName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4332; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thank you, ${name}!</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <p style="color: #333;">We have received your booking request for <strong>${tourName}</strong> on <strong>${date}</strong>.</p>
            <p style="color: #333;">Our team will contact you within 24 hours to confirm your booking.</p>
            <p style="color: #333;">If you have any questions, feel free to reach us at:</p>
            <ul style="color: #333;">
              <li>Email: <a href="mailto:info@traveltuliptours.nl">info@traveltuliptours.nl</a></li>
              <li>Phone: <a href="tel:+31201234567">+31 20 123 4567</a></li>
              <li>WhatsApp: <a href="https://wa.me/31201234567">+31 20 123 4567</a></li>
            </ul>
            <p style="color: #888; font-size: 13px; margin-top: 24px;">TravelTulipTours · Keizersgracht 123 · 1015 CJ Amsterdam</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
