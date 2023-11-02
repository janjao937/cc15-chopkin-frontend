import React from "react";
import { AiFillStar } from "react-icons/ai";
import defaultImage from "../assets/blank.png";
import { Progress } from "@material-tailwind/react";
import ReviewForm from "../features/restaurant/ReviewForm";

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
    reviewImage:
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
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
    reviewImage:
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
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
    reviewImage:
      "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

export default function RestaurantReview() {
  return (
    <div className="w-[60rem] ml-40 border shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-evenly text-red-600 text-xl">
          <div className="font-bold">Reviews(xx,xxx)</div>
          <div>About</div>
          <div>How to use</div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center w-20 h-20 border-4 border-red-600 rounded-full text-2xl font-semibold">
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
          <ReviewForm />
        </div>
        <div className="w-full border-b-2"></div>
        <div className="flex flex-col">
          {mocReview.map((item, index) => (
            <>
              <div className="flex py-4">
                <div className="w-40 px-10 pt-2 text-xs">
                  <div key={index} className="w-full">
                    {item.profileImg}
                  </div>
                  <div key={index}>{item.customer}</div>
                  <div key={index}>{item.createAt}</div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <div key={index}>{item.restaurant}</div>
                  <div key={index}>{item.score}</div>
                  <div key={index}>{item.message}</div>
                  <div key={index} className="w-20 h-20">
                    <img
                      src={item.reviewImage}
                      alt="review"
                      className="aspect-square cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-b-2"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
