import { getUserGoals } from "@/actions/goal";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your goals | IntelliLearn",
};

export default async function Home() {
  const goals = await getUserGoals();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your goals</h1>

      {goals.length ? (
        <div className="w-full flex flex-col gap-2">
          {goals.map((goal) => (
            <Card key={goal.id}>
              <CardHeader>
                <CardTitle>{goal.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription>{goal.description}</CardDescription>
              </CardContent>

              <CardFooter>
                <Link
                  href={`/goal/${goal.id}`}
                  className={buttonVariants({ variant: "default" })}
                >
                  Continue
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-center">
          <p>You have not created any goals yet.</p>
          <Link
            href="/new-goal"
            className={buttonVariants({ variant: "default" })}
          >
            Create new goal now
          </Link>
        </div>
      )}
    </div>
  );
}
