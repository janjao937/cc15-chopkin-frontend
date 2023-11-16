import { Step, Stepper, Radio } from "@material-tailwind/react";
import { useState } from "react";
import MyButton from "./MyButton";
import MyRadio from "./MyRadio";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import useAuth from "../Hooks/use-auth";
import useBooking from "../Hooks/use-booking";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMan4 } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

export default function MyStepper({ setBooking, booking, allPackage, resId,res }) {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isSelectPackage, setIsSelectPackage] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [date, setDate] = useState(null);
  const [isSelectTime, setIsSelectTime] = useState(false);
  const [time, setTime] = useState(null);
  const [customerPackage, setCustomerPackage] = useState(null);
  const [adultPrice, setAdultPrice] = useState(0);
  const [kidsPrice, setKidsPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFormReady, setIsFormReady] = useState(false);
  const [payStatus, setPayStatus] = useState(0);

  const { numberOfKids, numberOfAdult, customerCreateBooking,handleResetBookingValues } = useBooking();
  const [isBooking, setIsBooking] = useState({
    packageId: "",
    customerId: "",
    restaurantId: "",
    bookingDate: "",
    bookingTime: "",
    specialRequest: "",
    totalKid: "",
    totalCustomer: "",
    paymentStatus: 2,
  });

  const handleConfirmBooking = (e) => {
    console.log(payStatus);
    const updatedBooking = {
      packageId: customerPackage.id,
      customerId: authUser.id,
      restaurantId: resId,
      bookingDate: date,
      bookingTime: time,
      specialRequest: isBooking.specialRequest,
      totalKid: numberOfKids,
      totalCustomer: numberOfAdult,
      paymentStatus: payStatus !== undefined ? payStatus : 2,
    };
    setIsBooking(updatedBooking);
    setIsFormReady(true);

    // navigate("/");
  };

  // console.log(`KID=====>`,numberOfKids);
  // console.log(`ADULT===>`,numberOfAdult);

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

  const handleSelectPackage = (packageId) => {
    setIsSelectPackage(!isSelectPackage);
    // console.log(`allPack`,allPackage);
    const pack = allPackage.find((item) => item.id === packageId);
    // console.log(pack)
    setCustomerPackage(pack);
  };

  // reset numberOfAdult,Kids
  useEffect(()=>{
    handleResetBookingValues();
  },[]);

  useEffect(() => {
    if (customerPackage) {
      const newAdultPrice = customerPackage.price * numberOfAdult;
      const newKidsPrice = (customerPackage.price * numberOfKids) / 2;
      const newTotalPrice = newAdultPrice + newKidsPrice;

      setAdultPrice(newAdultPrice);
      setKidsPrice(newKidsPrice);
      setTotalPrice(newTotalPrice);

      // console.log('total price', newTotalPrice);
      // console.log('total in state', totalPrice);
    }
  }, [customerPackage, numberOfAdult, numberOfKids]);

  useEffect(() => {
    if (isFormReady) {
      customerCreateBooking(isBooking);
    }
    // console.log(isBooking);
  }, [isFormReady, isBooking, customerCreateBooking]);

  const handleCheckToggle = () => {
    setCheckToggle(!checkToggle);
  };

  const handleSelectTime = () => {
    setIsSelectTime(!isSelectTime);
  };

  const handleOnChange = (e) => {
    setIsBooking({ ...isBooking, [e.target.name]: e.target.value });
  };

  const handleSelectPayment = (value) => {
    console.log(value);
    setPayStatus(value);
    // console.log(payStatus);
  };

  const { authUser } = useAuth();
  // console.log(`status:======> ${payStatus}`);

  // console.log(`date`,date);
  // console.log(`time`,time);
  // console.log(`cuspackage`,customerPackage);

  // console.log(isBooking);

  // console.log(payStatus);

  // console.log(`BOOKING =======> `,isBooking);

  return (
    <div className="flex flex-col gap-4">
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
          // onClick={() => setActiveStep(0)}
        >
        

          <MdOutlineMan4 size={22}></MdOutlineMan4>
        
        </Step>
        <Step
          activeClassName="!bg-secondary"
          completedClassName="!bg-secondary text-white"
          // onClick={() => setActiveStep(1)}
        >
          <BsCalendarDate size={22}></BsCalendarDate>
        </Step>
        <Step
          activeClassName="!bg-secondary"
          completedClassName="!bg-secondary text-white"
          // onClick={() => setActiveStep(2)}
        >
          <IoFastFoodOutline size={22}></IoFastFoodOutline>
        </Step>
      </Stepper>

      {isFirstStep ? (
        <MyRadio handleNext={handleNext} handlePrev={handlePrev} />
      ) : isLastStep ? (
        <div>
          {isSelectPackage ? (
            <div className="flex flex-col gap-3">
              {" "}
              {authUser ? (
                <section>
                  {" "}
                  <p className="font-semibold">Personal Information</p>
                  <p>{authUser.firstName}</p>
                  <p>{authUser.phone}</p>
                  <p>{authUser.email}</p>
                </section>
              ) : (
                <div>
                  <p>Name</p>
                  <input type="text" className="border" />
                  <p>Phone</p>
                  <input type="text" className="border" />
                  <p>Email</p>
                  <input type="email" className="border" />
                  <p>Special Request</p>
                  <input type="text" className="border" />
                </div>
              )}
              <section>
                <p className="font-semibold">special request</p>
                <input
                  type="text"
                  name="specialRequest"
                  id=""
                  className="border border-gray-400 w-full h-[40px]"
                  onChange={handleOnChange}
                />
              </section>
              <section className="flex flex-col gap-1">
                <p className="font-semibold">summary</p>
                <div className="p-2 bg-gray-300 ">
                  Time: {time},Adult: {numberOfAdult},Kids: {numberOfKids}
                </div>
                <div className="font-bold flex gap-2">PACKAGE: <p className="font-normal">{customerPackage.name}</p></div>

                <p className="font-semibold">ADULT PRICE:</p>
                <div className="flex justify-between">
                  <p className="text-gray-500">{customerPackage.price}</p>
                  <p>x{numberOfAdult}</p>
                  <p>{adultPrice}</p>
                </div>

                <p className="font-semibold">KIDS PRICE:</p>
                <div className="flex justify-between">
                  <p className="text-gray-500">{customerPackage.price / 2}</p>
                  <p>x{numberOfKids}</p>
                  <p>{kidsPrice}</p>
                </div>

                <p className="font-semibold">Total Price</p>
                <p>{totalPrice}</p>
              </section>
              <section>
                <div className="flex justify-between">
                  <p className="font-semibold">Select Payment</p>
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
                    <Radio
                    color="red"
                      onChange={() => handleSelectPayment(0)}
                      name="description"
                      label={
                        <div>
                          <p color="blue-gray" className="font-medium">
                            Credit Card
                          </p>
                        </div>
                      }
                    />
                    <Radio
                    color="red"
                      onChange={() => handleSelectPayment(2)}
                      name="description"
                      label={
                        <div>
                          <p color="blue-gray" className="font-medium">
                            Pay at Restaurant
                          </p>
                        </div>
                      }
                    />
                  </div>
                ) : undefined}
              </section>
              {/* <section>
                <p className="font-semibold">Term & Conditions</p>
              </section> */}
              <section>
                {/* <p className="font-semibold">Total Prepayment</p> */}

                <MyButton
                  style={`p-2 bg-secondary rounded-full w-full`}
                  onClick={handleConfirmBooking}
                >
                  CONFIRM
                </MyButton>
              </section>
            </div>
          ) : (
            <div>
              {allPackage.map((item, index) => (
                <section key={index}>
                  <div className="flex py-10 px-4 shadow-sm border border-gray-100 flex-col gap-3">
                    <div className="flex-1 flex flex-col justify-between gap-2">
                      <p className="font-semibold">{item.name}</p>
                      <button
                        onClick={() => handleOpenMenu(item.id)}
                        className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4 text-primary`}
                      >
                        Menu
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p>{item.price}</p>
                    </div>
                    <MyButton
                      onClick={() => handleSelectPackage(item.id)}
                      style={`bg-primary h-[40px] rounded-md`}
                    >
                      Booking
                    </MyButton>
                  </div>

                  {openMenu === item.id ? (
                    <div className="">
                      <div className="flex p-4 flex-col">
                        <div className="flex-1">
                          <p className="font-semibold">รอบเวลาที่เปิดจอง</p>

                          <div className="flex flex-col">
                          {res?.BusinessTimes.map((item, index) => (
                                    <div className="flex gap-5" key={index}>
                                      <p>
                                        {item.day == 1
                                          ? "mon"
                                          : item.day == 2
                                          ? "tue"
                                          : item.day == 3
                                          ? "wed"
                                          : item.day == 4
                                          ? "thurs"
                                          : item.day == 5
                                          ? "fri"
                                          : item.day == 6
                                          ? "sat"
                                          : "sun"}
                                      </p>
                                      <p>{item.openTime}</p>
                                      <p>-</p>
                                      <p>{item.closedTime}</p>
                                    </div>
                                  ))}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p>รายละเอียดแพ็กเกจ</p>
                        </div>
                      </div>
                      <img className="w-full" src={item.img} alt="" />
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
          {isSelectTime ? (
            <div className="flex flex-col gap-3">
              <p>TIME</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                <div className="w-full h-[60px]">
                    <TimePicker
                      label="HH:MM AM/PM"
                      name="bookingTime"
                      // value={inputModify.inputKey}
                      onChange={(e) => setTime(e.format("HH:mm"))}
                      className="w-full h-full"
                    />
                  </div>
                </DemoContainer>
              </LocalizationProvider>
              {time ? <MyButton onClick={handleNext} style={`bg-secondary w-full`}>Next</MyButton> : undefined}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <div className="w-full h-[60px]">
                    <DatePicker
                      label="Calender Date"
                      name="bookingDate"
                      className="w-full h-full"
                      onChange={(e) => {
                        setDate(e.format("DD-MM-YYYY"));
                      }}
                    />
                  </div>
                </DemoContainer>
              </LocalizationProvider>
              {date ? (
                <MyButton onClick={handleSelectTime} style={`bg-secondary w-full`}>Next</MyButton>
              ) : undefined}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
