import { Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";
import MyButton from "./MyButton";
import MyRadio from "./MyRadio";

export default function MyStepper({ setBooking, booking, mockPackage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isSelectPackage, setIsSelectPackage] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);

  const handleNext = () => {
    !isLastStep && setActiveStep((cur) => cur + 1);
  };
  const handlePrev = () => {
    if (isFirstStep) {
      setBooking(!booking);
    }
    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  const handleSelectPackage = () => {
    setIsSelectPackage(!isSelectPackage);
  };

  const handleCheckToggle = () => {    
    setCheckToggle(!checkToggle);
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

      {isFirstStep ? (
        <MyRadio
          handleNext={handleNext}
          mockPackage={mockPackage}
          handlePrev={handlePrev}
        />
      ) : isLastStep ? (
        <div>
          <section>
            {" "}
            <p className="font-semibold">Personal Information</p>
            <p>Name</p>
            <p>Phone</p>
            <p>email</p>
          </section>

          <section>
            <p className="font-semibold">summary</p>
            <div>datetime and aduilt,kids</div>
            <div>price</div>
            <div>total price</div>
          </section>

          <section>
            <div>
              <p className="font-semibold">Paynow</p>
              {checkToggle ? (
                <button
                  onClick={handleCheckToggle}
                  className="border rounded-full border-grey flex items-center  cursor-pointer w-12 bg-secondary justify-end"
                >
                  <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white "></span>
                </button>
              ) : (
                <button
                  onClick={handleCheckToggle}
                  className="border rounded-full border-grey flex  items-center cursor-pointer w-12 justify-start"
                >
                  <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white"></span>
                </button>
              )}
            </div>
            <p>QRCODE</p>
            <p>Credit/Debit Card</p>
          </section>

          <section>
            <p className="font-semibold">Term & Conditions</p>
          </section>

          <section>
            <p className="font-semibold">Total Prepayment</p>
            <p>total price</p>
            <button>CONFIRM</button>
          </section>
        </div>
      ) : (
        <div>Select Booking Date & Time</div>
      )}

      {/* <div className="mt-16 flex justify-between">
        <MyButton
          style={`bg-secondary`}
          onClick={handlePrev}
          // disabled={isFirstStep}
        >
          Prev
        </MyButton>

        <button onClick={()=>console.log('re-render')}>Next</button>
        <MyButton
          style={`bg-secondary`}
          onClick={handleNext}
          disabled={isLastStep}
        >
          Confirm
        </MyButton>

      </div> */}
    </div>
  );
}
