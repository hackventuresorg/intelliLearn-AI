import { getStepById } from "@/actions/step";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Markdown from "react-markdown";

type StepDetailsProps = {
  params: Promise<{ stepId: string }>;
};

export async function generateMetadata({
  params,
}: StepDetailsProps): Promise<Metadata> {
  const { stepId } = await params;
  const step = await getStepById(stepId);

  return {
    title: step?.title ?? "Not found",
    description: step?.description,
  };
}

export default async function StepDetails({ params }: StepDetailsProps) {
  const { stepId } = await params;
  const step = await getStepById(stepId);

  if (!step) {
    return (
      <div className="text-center p-4">Ste with id {stepId} not found.</div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-1">{step.title}</h1>
      <p className="text-sm text-muted-foreground">{step.description}</p>
      <p className="italic underline">{step.quote}</p>
      <Separator className="my-8" />

      <Markdown>{step.content}</Markdown>
    </div>
  );
}
