import { generateStepsWithAi } from "@/actions/goal";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await generateStepsWithAi();
  return NextResponse.json(response);
}
