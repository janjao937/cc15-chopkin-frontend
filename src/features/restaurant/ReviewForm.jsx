import { AiFillStar } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import MyOutlineButton from "../../components/MyOutlineButton";
import { useState, useRef } from "react";
import InputErrorMessage from "../auth/InputErrorMessage";
import { Checkbox, input } from "@material-tailwind/react";
import axios from "../../config/axios";
import { useEffect } from "react";

export default function ReviewForm({ isOpenAfterComplete, resId }) {
  const [anonymous, setAnonymous] = useState(false);
  const [countingStar, setCountingStar] = useState(null);
  const [hoverStart, setHoverStar] = useState(null);

  const [reviewMessage, setReviewMessage] = useState({
    reviewMessage: "",
    restaurantId: resId,
    score: "",
    isAnonymous: "",
  });

  const [file, setFile] = useState(null);
  const [score, setScore] = useState(0);

  const fileEl = useRef(null);

  const handleChangereviewMessage = (e) => {
    setReviewMessage({ ...reviewMessage, [e.target.name]: e.target.value });
  };

  const handleAnonymous = () => {
    setAnonymous(!anonymous);
  };
  console.log(anonymous);
  console.log(reviewMessage);

  // { reviewMessage, restaurantId, score } backend

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append("",file);
      }
      if (reviewMessage) {
        
      }
      setReviewMessage({
        reviewMessage: reviewMessage.reviewMessage,
        restaurantId: resId,
        score: countingStar,
        isAnonymous: "",
      });
      axios
        .post("http://localhost:8888/review", reviewMessage)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }

  };

  console.log(file);
  console.log(countingStar);

  return (
    <>
      {isOpenAfterComplete && (
        <form className="px-10 flex flex-col gap-4 border shadow-md p-5">
          <div className="flex gap-4 pb-3">
            <div>Rating Score :</div>
            <div className="flex justify-center items-center cursor-pointer">
              {[...Array(5)].map((item, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      className="hidden"
                      name="rating"
                      value={currentRating}
                      onClick={() => setCountingStar(currentRating)}
                    />
                    <AiFillStar
                      className="w-6 h-6 cursor-pointer"
                      color="yellow"
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex gap-4">
            <div>Write a Review :</div>
            <div>
              <textarea
                className="border border-gray-400 shadow-lg"
                name="reviewMessage"
                // value={reviewMessage.message}
                onChange={handleChangereviewMessage}
                rows="5"
                cols="40"
              ></textarea>
            </div>
          </div>

          <div>
            <Checkbox
              color="red"
              id="ripple-off"
              label="Anonymous mode"
              ripple={false}
              onClick={handleAnonymous}
            />
          </div>

          <div className="ml-36">
            <input
              type="file"
              multiple
              className="hidden"
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setFile(Array.from(e.target.files));
                }
                if (e.target.files.length > 4) {
                  setFile(null);
                }
              }}
            />
            {file ? (
              <div
                onClick={() => fileEl.current.click()}
                className="w-20 h-20 cursor-pointer flex gap-3"
              >
                {file.map((item, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(item)}
                    alt="review-pic"
                    className="w-full h-full"
                  />
                ))}
              </div>
            ) : (
              <div>
                <div
                  className="flex justify-center items-center bg-gray-200 border border-gray-300 shadow w-20 h-20 cursor-pointer"
                  onClick={() => fileEl.current.click()}
                >
                  <BiImageAdd />
                </div>
                <InputErrorMessage message="Only add 4 images" />
              </div>
            )}
          </div>

          <div className="flex self-center">
            <MyOutlineButton
              onClick={handleSubmit}
              outlinestyle={`outline-red-600 hover:bg-red-500 hover:text-white`}
            >
              Submit Review
            </MyOutlineButton>
          </div>
        </form>
      )}
    </>
  );
}
