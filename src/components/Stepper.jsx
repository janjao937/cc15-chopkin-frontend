import { Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";
import MyButton from "./MyButton";
import MyRadio from "./MyRadio";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MyStepper({ setBooking, booking, mockPackage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isSelectPackage, setIsSelectPackage] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (itemId) => {
    setOpenMenu(itemId === openMenu ? null : itemId);
  };

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
        <MyRadio handleNext={handleNext} handlePrev={handlePrev} />
      ) : isLastStep ? (
        <div>
          {isSelectPackage ? (
            <div>
              {" "}
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
                <div className="flex justify-between">
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
                {checkToggle ? (
                  <div>
                    <p>QRCODE</p>
                    <p>Credit/Debit Card</p>{" "}
                  </div>
                ) : undefined}
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
            <div>
              {mockPackage.map((item, index) => (
                <section key={index}>
                  <div className="flex py-10 px-4 shadow-sm border border-gray-100 flex-col">
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-semibold">{item.packageName}</p>
                      <button
                        onClick={() => handleOpenMenu(item.id)}
                        className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4 text-primary`}
                      >
                        Menu
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs">
                        {item.packageInfo}
                      </p>
                    </div>
                    <div className="flex-1 text-center">
                      <p>{item.price}</p>
                    </div>
                    <MyButton
                      onClick={handleSelectPackage}
                      style={`bg-primary h-[40px] rounded-md`}
                    >
                      Booking
                    </MyButton>
                  </div>

                  {openMenu === item.id ? (
                    <div className="">
                      <div className="flex p-4 flex-col">
                        <div className="flex-1">
                          <p>รอบเวลาที่เปิดจอง</p>

                          <div className="flex  justify-around">
                            <div className="flex">
                              <section>
                                {" "}
                                <p>จันทร์</p>
                                <p>อังคาร</p>
                                <p>พุธ</p>
                                <p>พฤหัสบดี</p>
                              </section>
                              <section>
                                <p>Datetime</p>
                                <p>Datetime</p>
                                <p>Datetime</p>
                                <p>Datetime</p>
                              </section>
                            </div>

                            <div className="flex">
                              <section>
                                {" "}
                                <p>ศุกร์</p>
                                <p>เสาร์</p>
                                <p>อาทิตย์</p>
                              </section>
                              <section>
                                <p>Datetime</p>
                                <p>Datetime</p>
                                <p>Datetime</p>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p>รายละเอียดแพ็กเกจ</p>
                        </div>
                      </div>
                      <img className="w-full" src={item.menuImage} alt="" />
                      <div className="text-center p-4">
                        <button
                          onClick={handleOpenMenu}
                          className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4`}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : undefined}
                </section>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Select Booking Date & Time</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <div className="w-[180px] h-[60px]">
                <DatePicker
                  label="Calender Date"
                  name="bookingDate"
                  className="w-full h-full"
                />
              </div>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
}
