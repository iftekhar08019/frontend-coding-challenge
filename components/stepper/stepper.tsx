import { Step } from "./steps";

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center ">
      <ol className="flex items-center  w-[424px] lg:h-[132px] h-[80px] px-4 lg:py-8 py-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber <= currentStep; 
          const isActive = stepNumber === currentStep;

          return (
            <li key={index} className="flex-1 flex items-center relative">
              {/* Circle */}
              <div
                className={`flex items-center justify-center lg:w-10 lg:h-10 w-[30px] h-[30px] rounded-full 
                  ${isCompleted ? "bg-blue-600  text-white" : "bg-gray-200"}
                  ${isActive ? "border-blue-600 text-white" : ""}
                  ${
                    !isActive && !isCompleted
                      ? "border-gray-300 text-black"
                      : ""
                  }
                `}
              >
                {stepNumber}
              </div>

              {/* Label */}
              <span
                className={`absolute top-10 left-1/2 -translate-x-1/2 text-xs 
                  ${isActive || isCompleted ? "text-blue-600" : "text-gray-400"}
                `}
              >
                {step.title}
              </span>

              {/* Line between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 lg:h-[6px] h-[4px] 
                    ${isCompleted ? "bg-blue-600" : "bg-gray-200"}
                  `}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
