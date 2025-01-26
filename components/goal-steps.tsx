import { cn } from "@/lib/utils";
import { Step } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { StarIcon } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type GoalStepsProps = {
  className?: string;
  style?: React.CSSProperties;
  steps: Step[];
};

export default function GoalSteps({ className, style, steps }: GoalStepsProps) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center flex-col",
        className
      )}
      style={style}
    >
      {steps.map((step, index) => (
        <Fragment key={step.id}>
          <Popover>
            <PopoverTrigger asChild>
              <button className="size-10 rounded-full flex items-center justify-center text-muted-foreground bg-muted">
                <StarIcon />
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="max-w-[600px]"
              side="right"
              sideOffset={10}
            >
              <h1 className="font-medium mb-1">{step.title}</h1>
              <p className="text-muted-foreground text-sm mb-2">{step.quote}</p>

              <Link
                href={`/goal/steps/${step.id}`}
                className={buttonVariants()}
              >
                Read more
              </Link>
            </PopoverContent>
          </Popover>

          {index < steps.length - 1 ? (
            <div className="h-20 w-[2px] bg-muted" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
