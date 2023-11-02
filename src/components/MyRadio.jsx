import { useState } from "react";
import MyButton from "./MyButton";

export default function MyRadio() {
  const [numberOfAdult, setNumberOfAdult] = useState(0);
  const [numberOfKids,setNumberOfKids] = useState(0);
  const [haveKids,setHaveKids] = useState(false);

  const handleGetNumberOfAdult = (value) => {
    setNumberOfAdult(value);
  };

  const handleHaveKid = () => {
    setHaveKids(!haveKids);
  };

  const handleAddKid = () => {
    setNumberOfKids(numberOfKids + 1);  
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
        {number}
      </div>
      <button onClick={handleHaveKid} className="text-primary font-semibold p-2 hover:bg-gray-200 transition self-end rounded-full">
        + HAVE KIDS
      </button>
      {haveKids ? <div className="border-b">have kid</div> : undefined}
    </div>
  );
}
