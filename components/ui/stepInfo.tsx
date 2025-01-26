interface StepInfoProps {
  description: string;
  completedBy?: string;
}

export default function StepInfo({ description }: StepInfoProps) {
  return (
    <div className="w-24 h-32 bg-white text-[#292929]">
      <p>{description}</p>
    </div>
  );
}
