import StepInfo from "@/components/ui/stepInfo";
import Step from "@/components/ui/steps";

export default function Roadmap() {
  return (
    <div className="min-w-screen min-h-screen bg-[#09090b] text-white flex ">
    <div className="flex gap-8 mt-2 ml-2">
      <div className="flex flex-col items-center">
        
        <Step step="1" isActive={false} isCompleted={true} isLast={false} />
        <Step step="2" isActive={false} isCompleted={true} isLast={false} />
        <Step step="2" isActive={false} isCompleted={true} isLast={false} />
        <Step step="2" isActive={false} isCompleted={true} isLast={false} />
        <Step step="2" isActive={false} isCompleted={true} isLast={false} />
        <Step step="2" isActive={false} isCompleted={true} isLast={false} />
        <Step step="3" isActive={true} isCompleted={false} isLast={true} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
        <StepInfo description="Step 1 Information" />
        <StepInfo description="Step 1 Information" />

        </div>
        
        <div className="flex gap-4">
        <StepInfo description="Step 1 Information" />
        <StepInfo description="Step 1 Information" />

        </div>
        
        <div className="flex gap-4">
        <StepInfo description="Step 1 Information" />
        <StepInfo description="Step 1 Information" />

        </div>

        
        <div className="flex gap-4">
        <StepInfo description="Step 1 Information" />
        <StepInfo description="Step 1 Information" />

        </div>
        
        <div className="flex gap-4">
        <StepInfo description="Step 1 Information" />
        <StepInfo description="Step 1 Information" />

        </div>
        <StepInfo description="Step 2 Information" />
        <StepInfo description="Step 3 Information" />
      </div>
    </div>
  </div>
  )
}