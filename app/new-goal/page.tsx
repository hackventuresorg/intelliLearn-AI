import NewGoalForm from "@/components/new-goal-form";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create new goal | IntelliLearn",
};

export default function NewGoal() {
  return (
    <div className="px-4 py-10">
      <h1 className="mb-1">Set Your New Goal</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        Ready to achieve something great? Set your goal, choose a timeline, and
        IntelliLearn-AI will create a personalized plan with actionable steps to
        help you stay on track and motivated.
      </p>
      <Separator className="mb-6" />

      <NewGoalForm />
    </div>
  );
}
