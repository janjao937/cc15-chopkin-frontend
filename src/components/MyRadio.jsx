import { useState } from "react";
import MyButton from "./MyButton";
import useBooking from "../Hooks/use-booking";
import { useEffect } from "react";

export default function MyRadio({ handleNext, handlePrev }) {

  const {
    handleGetNumberOfAdult,
    handleHaveKid,
    handleAddKid,
    handleRemoveKid,
    numberOfAdult,
    numberOfKids,
    haveKids
  } = useBooking();

  // console.log(`Adult===>`, numberOfAdult);
  // console.log(`Kids====>`, numberOfKids);

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
      <p className="text-center font-semibold text-lg">Select Adult</p>
      <div className="grid w-full grid-cols-5 gap-2 rounded-xl p-2">
        {number}
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleHaveKid}
          className="text-primary font-semibold p-2 hover:bg-gray-200 transition self-end rounded-full"
        >
          + HAVE KIDS
        </button>
        {haveKids ? (
          <div className="border-b flex justify-between">
            <div className="flex items-center">{numberOfKids} kid</div>
            <div className="flex gap-1">
              <button className="p-2 bg-red-500 text-white" onClick={handleRemoveKid}>
                -
              </button>
              <button className="p-2 bg-red-500 text-white" onClick={handleAddKid}>
                +
              </button>
            </div>
          </div>
        ) : undefined}
        <div className="flex justify-between">
                  <MyButton
          style={`bg-secondary`}
          onClick={handlePrev}
          // disabled={isFirstStep}
        >
          Prev
        </MyButton>
        {numberOfAdult > 0 ? (
          <MyButton onClick={handleNext} style={`bg-secondary`}>Next</MyButton>
        ) : (
          undefined
        )}
        </div>

      </div>
    </div>
  );
}
