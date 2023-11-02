import { useState } from "react";

export default function MyRadio() {
  const [numberOfAdult, setNumberOfAdult] = useState(0);

  const handleGetNumberOfAdult = (value) => {
    setNumberOfAdult(value);
  };

  console.log(numberOfAdult);

  const number = [];
  for (let i = 1; i <= 20; i++) {
    number.push(
      <div key={i} className="hover:bg-red-300 rounded-full hover:text-white">
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
    </div>
  );
}
