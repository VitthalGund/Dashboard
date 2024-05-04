import { NextRequest, NextResponse } from "next/server";
import { candidateData } from "@/data/candidate";
import url from "url";

export async function GET(req: NextRequest) {
  try {
    const queryParams = url.parse(req.url, true).query;
    if (!queryParams) {
      return NextResponse.json(
        {
          message: "Missing required query",
        },
        { status: 400 }
      );
    }

    const { limit, review, offset } = queryParams;

    return NextResponse.json({ candidateData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
