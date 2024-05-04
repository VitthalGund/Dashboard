import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import url from "url";
import { candidateData } from "@/data/candidate";
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

    const { user_id, assignment_id } = queryParams;
    // console.log({ user_id, assignment_id });

    // Validate user_id and assignment_id
    if (!user_id || !assignment_id) {
      return NextResponse.json(
        {
          message: "Missing required parameters",
        },
        { status: 400 }
      );
    }

    // Fetch data from your database or external source
    const data = fetchCandidateAssignmentData(user_id, assignment_id);

    if (data) {
      return NextResponse.json({ ...data }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Candidate assignment data not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// Replace this with your actual data fetching logic
function fetchCandidateAssignmentData(userId: any, assignmentId: any) {
  const item = candidateData.filter(
    (item) => item.asssignmentId == assignmentId && item.id == userId
  )[0];
  // console.log(item);
  return item;
}
