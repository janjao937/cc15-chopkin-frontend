import { useState } from "react";
import MyButton from "./MyButton";

export default function MyRadio({ handleNext, handlePrev,mockPackage }) {
  const [numberOfAdult, setNumberOfAdult] = useState(0);
  const [numberOfKids, setNumberOfKids] = useState(0);
  const [haveKids, setHaveKids] = useState(false);
  const [selectPackage, setSelectPackage] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (itemId) => {
    setOpenMenu(itemId === openMenu ? null : itemId);
  };

  const handleGetNumberOfAdult = (value) => {
    setNumberOfAdult(value);
  };

  const handleHaveKid = () => {
    setHaveKids(!haveKids);
    setNumberOfKids(0);
  };

  const handleAddKid = () => {
    setNumberOfKids(numberOfKids + 1);
  };

  const handleRemoveKid = () => {
    if (numberOfKids > 0) {
      setNumberOfKids(numberOfKids - 1);
    }
  };

  const handleSelectPackage = () => {
    setSelectPackage(true);
  };

  console.log(numberOfAdult);

  const number = [];
  for (let i = 1; i <= 20; i++) {
    number.push(
      <div
        key={i}
        className="hover:bg-red-300 transition rounded-full hover:text-white"
      >
        <input
          type="radio"
          name="option"
          id={i}
          value={i}
          className="peer hidden"
          onChange={() => handleGetNumberOfAdult(i)}
        />
        <label
          htmlFor={i}
          className="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-secondary peer-checked:font-bold peer-checked:text-white"
        >
          {i}
        </label>
      </div>
    );
  }

  // console.log(number);
  return (
    <div className="flex flex-col gap-4">
      <hr />
      <p className="text-center font-semibold">Select Adult</p>
      <div className="grid w-full grid-cols-5 gap-2 rounded-xl p-2">
        {selectPackage ? <div>Happy</div> : number}
      </div>
      {selectPackage ? (
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
                          <p className="text-gray-500 text-xs">{item.packageInfo}</p>
                        </div>
                        <div className="flex-1 text-center">
                          <p>{item.price}</p>
                        </div>
                        <MyButton
                          onClick={handleNext}
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
      ) : (
        <div>
          <button
            onClick={handleHaveKid}
            className="text-primary font-semibold p-2 hover:bg-gray-200 transition self-end rounded-full"
          >
            + HAVE KIDS
          </button>
          {haveKids ? (
            <div className="border-b flex justify-between">
              <div>{numberOfKids} kid</div>
              <div>
                <button className="p-2 bg-red-500" onClick={handleRemoveKid}>
                  -
                </button>
                <button className="p-2 bg-red-500" onClick={handleAddKid}>
                  +
                </button>
              </div>
            </div>
          ) : undefined}
          <MyButton
            style={`bg-secondary`}
            onClick={handlePrev}
            // disabled={isFirstStep}
          >
            Prev
          </MyButton>

          {numberOfAdult > 0 ? (
            <button onClick={handleSelectPackage}>Confirm</button>
          ) : (
            // <MyButton style={`bg-secondary`} onClick={handleNext}>
            //   Confirm
            // </MyButton>
            <button>Next</button>
          )}
        </div>
      )}
    </div>
  );
}
