import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rating = searchParams.get("rating");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const filters: any = {};

  if (rating) {
    filters.rating = {
      gte: parseFloat(rating),
    };
  }

  if (priceMin || priceMax) {
    filters.pricePerNight = {};
    if (priceMin) {
      filters.pricePerNight.gte = parseFloat(priceMin);
    }
    if (priceMax) {
      filters.pricePerNight.lte = parseFloat(priceMax);
    }
  }

  try {
    const hotels = await prismadb.hotel.findMany({
      where: filters,
    });

    return NextResponse.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
