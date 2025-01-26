import { getGoalById } from "@/actions/goal";
import GoalSteps from "@/components/goal-steps";
import { Separator } from "@/components/ui/separator";

type GoalDetailsProps = {
  params: Promise<{ goalId: string }>;
};

export async function generateMetadata({ params }: GoalDetailsProps) {
  const { goalId } = await params;
  const goal = await getGoalById(goalId);

  return {
    title: goal?.title ?? "Not found",
    description: goal?.description,
  };
}

export default async function GoalDetails({ params }: GoalDetailsProps) {
  const { goalId } = await params;
  const goal = await getGoalById(goalId);

  if (!goal) {
    return (
      <div className="p-4 text-center">No goal found with id {goalId}.</div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-1">{goal.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
      <Separator className="mb-8" />

      <GoalSteps steps={goal.steps} />
    </div>
  );
}
