import { Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";
import MyButton from "./MyButton";

export default function MyStepper({setBooking,booking}) {
    
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => {
    if (isFirstStep) {
      setBooking(!booking);
    }
    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  return (
    <div>
      <Stepper
        lineClassName="!bg-black"
        activeLineClassName="!bg-secondary"
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          activeClassName="!bg-secondary"
          completedClassName="!bg-secondary text-white"
          onClick={() => setActiveStep(0)}
        >
          <div>Icon</div>
        </Step>
        <Step
          activeClassName="!bg-secondary"
          completedClassName="!bg-secondary text-white"
          onClick={() => setActiveStep(1)}
        >
          <div>Icon</div>
        </Step>
        <Step
          activeClassName="!bg-secondary"
          completedClassName="!bg-secondary text-white"
          onClick={() => setActiveStep(2)}
        >
          <div>Icon</div>
        </Step>
      </Stepper>

      <div className="mt-16 flex justify-between">
                  <MyButton
                    style={`bg-secondary`}
                    onClick={handlePrev}
                    // disabled={isFirstStep}
                  >
                    Prev
                  </MyButton>
                  <MyButton
                    style={`bg-secondary`}
                    onClick={handleNext}
                    disabled={isLastStep}
                  >
                    Next
                  </MyButton>
                </div>
    </div>
  );
}
