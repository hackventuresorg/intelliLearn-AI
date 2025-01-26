import { createNewGoal } from "@/actions/goal";
import { goalSchema } from "@/schema/goal";
import { NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = goalSchema.parse(payload);

    const goal = await createNewGoal(parsed);

    return NextResponse.json({ id: goal.id }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
