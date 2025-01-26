import { Button } from "./button";
import Image from "next/image";
interface CardProps {
    title: string;
    description: string;
    completedSteps: number;
    totalSteps: number;
}

export default function Card({ title, description, completedSteps, totalSteps }: CardProps) {
    const progressPercentage = Math.min((completedSteps / totalSteps) * 100, 100);
    return (
        <div className="w-full h-60 rounded-lg p-2 border-2 border-[#27272a] bg-[#09090b] text-white grid grid-cols-2">
            <div className=" flex flex-col justify-around">
                <div>
        <h3>{title}</h3>
        <small>{description}</small>
        </div>
<div>
<div className="w-4/5 relative max-w-md  ">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: `${progressPercentage}%` }}>
            <div className="text-sm text-center text-gray-700 font-medium">
        {completedSteps} / {totalSteps} 
        <div className="absolute right-[-20] top-[-2]">
        <Image src='/trophy.png' alt="trophy" width={20} height={20} className="filter invert"  />

        </div>
      </div>
        </div>
      </div>

    </div>
</div>

        <Button>Continue</Button>
            </div>
            <div className="flex flex-col items-center justify-around">
                <div className="bg-white rounded-2xl w-4/5 h-10 text-[#09090b] p-2">
                <p>
                Quote
                </p>
                </div>
                <div>
                <Image src='/mortarboard.png' alt="trophy" width={80} height={80} className="filter invert"  />
                </div>
            </div>
        </div>
    )
}