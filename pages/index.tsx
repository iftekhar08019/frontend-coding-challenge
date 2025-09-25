import Button from "../components/repareo/button";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import { steps } from "../components/stepper/steps";
import useStepper from "../hooks/useStepper";

export default function Home() {
  const { currentStep, handleNextStep } = useStepper();
  const isLastStep = currentStep === steps.length;

  return (
    <>
      <Header />
      <MainWrapper>
        <StepperWrapper>
          <Stepper steps={steps} currentStep={currentStep} />
        </StepperWrapper>
        <ButtonWrapper>
          {!isLastStep && <Button onClick={handleNextStep}>Next</Button>}
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}
