import React from "react";
import { AiFillStar } from "react-icons/ai";
import defaultImage from "../assets/blank.png";
import { Progress } from "@material-tailwind/react";
import ReviewForm from "../features/restaurant/ReviewForm";
import { useState } from "react";

const mocReview = [
  {
    reviewId: 1,
    customer: "customerName",
    profileImg: <img src={defaultImage} alt="customer" />,
    createAt: "CreateAt",
    restaurant: "restaurantName",
    score: <AiFillStar />,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam.",
    ReviewImage: [
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    ],
  },
  {
    reviewId: 2,
    customer: "customerName",
    profileImg: <img src={defaultImage} alt="customer" />,
    createAt: "CreateAt",
    restaurant: "restaurantName",
    score: <AiFillStar />,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam.",
    ReviewImage: [
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    ],
  },
  {
    reviewId: 3,
    customer: "customerName",
    profileImg: <img src={defaultImage} alt="customer" />,
    createAt: "CreateAt",
    restaurant: "restaurantName",
    score: <AiFillStar />,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam.",
    ReviewImage: [
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    ],
  },
];

export default function RestaurantReview() {
  const [isOpenAfterComplete, setIsOpenAfterComplete] = useState(false);

  return (
    <div className="w-[60rem] mx-40 pt-4 my-10 border shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-evenly text-red-600 text-xl">
          <div className="font-bold">Reviews(xx,xxx)</div>
          <div>About</div>
          <div>How to use</div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <div
              className="flex justify-center items-center w-20 h-20 border-4 border-red-600 rounded-full text-2xl font-semibold"
              onClick={() => setIsOpenAfterComplete(!isOpenAfterComplete)}
            >
              4.8
            </div>
            <div>xx,xxx Reviews</div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex">
              <AiFillStar />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-32">
            <Progress value={50} color="red" />
            <Progress value={50} color="red" />
            <Progress value={50} color="red" />
            <Progress value={50} color="red" />
            <Progress value={50} color="red" />
          </div>
        </div>
        <div>
          <ReviewForm isOpenAfterComplete={isOpenAfterComplete} />
        </div>
        <div className="w-full border-b-2"></div>
        <div className="flex flex-col">
          {mocReview.map((item, index) => (
            <div key={index}>
              <div className="flex py-4">
                <div className="w-40 px-10 pt-2 text-xs">
                  <div className="w-full">{item.profileImg}</div>
                  <div>{item.customer}</div>
                  <div>{item.createAt}</div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <div>{item.restaurant}</div>
                  <div>{item.score}</div>
                  <div>{item.message}</div>
                  <div className="flex gap-3 w-20 h-20">
                    {item.ReviewImage.map((el, index) => (
                      <img
                        src={el}
                        alt="review-pic"
                        key={`${item.reviewId}-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full border-b-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
