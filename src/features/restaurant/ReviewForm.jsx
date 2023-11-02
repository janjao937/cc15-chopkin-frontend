import { AiOutlineStar } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import MyOutlineButton from "../../components/MyOutlineButton";
import { useState } from "react";
import { useRef } from "react";

export default function ReviewForm() {
  const [file, setFile] = useState(null);
  const fileEl = useRef(null);
  return (
    <form className="px-10 flex flex-col gap-4 border shadow-md p-5">
      <div className="flex gap-4 pb-3">
        <div>Rating Score :</div>
        <div className="flex justify-center items-center cursor-pointer">
          <AiOutlineStar className="w-6 h-6" />
          <AiOutlineStar className="w-6 h-6" />
          <AiOutlineStar className="w-6 h-6" />
          <AiOutlineStar className="w-6 h-6" />
          <AiOutlineStar className="w-6 h-6" />
        </div>
      </div>
      <div className="flex gap-4">
        <div>Write a Review :</div>
        <div>
          <textarea
            className="border border-gray-400 shadow-lg"
            rows="5"
            cols="40"
          ></textarea>
        </div>
      </div>
      <div className="ml-36">
        {file ? (
          <div
            onClick={() => fileEl.current.click()}
            className="w-20 h-20 cursor-pointer"
          >
            <img
              src={URL.createObjectURL(file)}
              alt="review-pic"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div
            className="flex justify-center items-center bg-gray-200 border border-gray-300 shadow w-20 h-20 cursor-pointer"
            onClick={() => fileEl.current.click()}
          >
            <BiImageAdd />
          </div>
        )}

        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex self-center">
        <MyOutlineButton
          outlinestyle={`outline-red-600 hover:bg-red-500 hover:text-white`}
        >
          Submit Review
        </MyOutlineButton>
      </div>
    </form>
  );
}
