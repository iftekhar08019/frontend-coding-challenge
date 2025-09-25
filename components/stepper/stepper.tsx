import { Step } from "./steps";

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <ol className="flex items-center justify-center lg:w-[587px] w-[402px] lg:h-[132px] h-[80px]">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber <= currentStep; 
          const isActive = stepNumber === currentStep;

          return (
            <li key={index} className="flex items-center justify-center relative flex-1">
              {/* Circle */}
              <div
                className={`flex items-center justify-center lg:w-10 lg:h-10 w-[30px] h-[30px] rounded-full z-10
                  ${isCompleted ? "bg-blue-600 text-white" : "bg-gray-200"}
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
                className={`absolute lg:top-14 top-10 left-1/2 transform -translate-x-1/2 text-base font-semibold whitespace-nowrap
                  ${isActive || isCompleted ? "text-black" : "text-gray-400"}
                `}
              >
                {step.title}
              </span>

              {/* Line between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-1/2 w-full lg:h-[6px] h-[4px] -z-10
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
