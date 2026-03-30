import { NextRequest, NextResponse } from "next/server";

// Booking submissions are handled via Formspree (https://formspree.io/f/xkopjdrv)
// This route is kept as a fallback but forwards to Formspree
export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch("https://formspree.io/f/xkopjdrv", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
