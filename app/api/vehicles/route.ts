import { addVehicle, getVehicles } from "@/lib/prisma/vehicle";

import { NextResponse } from "next/server";

export async function GET() {
  const vehicles = await getVehicles();
  return NextResponse.json({ vehicles });
}
export async function POST(req: Request) {
  const data = await req.json();
  const vehicle = await addVehicle(data);
  return NextResponse.json({ vehicle });
}
