import { NextRequest, NextResponse } from "next/server";

import { Assignment } from "@/data/Assignment";
export async function GET(req: NextRequest) {
  try {
    const assignmentInfo = Assignment;
    return NextResponse.json({ ...assignmentInfo[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
