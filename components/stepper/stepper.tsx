import { Step } from "./steps";

interface StepperProps {
  steps: Step[];
  currentStep: number;
  maxStepsPerRow?: number;
}

export default function Stepper({ steps, currentStep, maxStepsPerRow = 4 }: StepperProps) {
  // Split steps into rows
  const stepRows = [];
  for (let i = 0; i < steps.length; i += maxStepsPerRow) {
    stepRows.push(steps.slice(i, i + maxStepsPerRow));
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      {stepRows.map((rowSteps, rowIndex) => (
        <div key={rowIndex} className="flex items-center justify-center w-full">
          <ol className="flex items-center justify-center lg:w-[587px] w-[402px] lg:h-[132px] h-[80px]">
            {rowSteps.map((step, stepIndex) => {
              const globalStepIndex = rowIndex * maxStepsPerRow + stepIndex;
              const stepNumber = globalStepIndex + 1;
              const isCompleted = stepNumber <= currentStep;
              const isActive = stepNumber === currentStep;

              return (
                <li key={globalStepIndex} className="flex items-center justify-center relative flex-1">
                  {/* Circle */}
                  <div
                    className={`flex items-center justify-center lg:w-10 lg:h-10 w-[30px] h-[30px] rounded-full z-10 font-semibold
                      ${isCompleted ? "bg-blue-600 text-white" : "bg-gray-200"}
                      ${isActive ? "border-2 border-blue-600 text-white" : ""}
                      ${
                        !isActive && !isCompleted
                          ? "border border-gray-300 text-black"
                          : ""
                      }
                    `}
                  >
                    {stepNumber}
                  </div>

                  {/* Label */}
                  <span
                    className={`absolute lg:top-14 top-10 left-1/2 transform -translate-x-1/2 text-sm lg:text-base font-semibold whitespace-nowrap
                      ${isActive || isCompleted ? "text-black" : "text-gray-400"}
                    `}
                  >
                    {step.title}
                  </span>

                  {/* Horizontal line between steps in the same row only */}
                  {stepIndex < rowSteps.length - 1 && (
                    <div
                      className={`absolute left-1/2 w-full lg:h-[6px] h-[4px] -z-10
                        ${isCompleted && (globalStepIndex + 1) <= currentStep ? "bg-blue-600" : "bg-gray-200"}
                      `}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
