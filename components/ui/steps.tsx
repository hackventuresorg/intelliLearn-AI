import React from "react";

interface StepProps {
  step: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast?: boolean;
}

export default function Step({ step, isActive, isCompleted, isLast }: StepProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
          isActive
            ? "border-purple-600 bg-purple-600 text-white"
            : isCompleted
            ? "border-purple-600 bg-white text-purple-600"
            : "border-gray-300 text-gray-500"
        }`}
      >
        {isCompleted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a 1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <span className="text-sm font-medium">{step}</span>
        )}
      </div>
      {!isLast && (
        <div className="w-0.5 h-28 bg-gray-300"></div>
      )}
    </div>
  );
}
