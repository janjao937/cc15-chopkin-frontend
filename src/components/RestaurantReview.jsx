import React from "react";
import { AiFillStar } from "react-icons/ai";
import defaultImage from "../assets/blank.png";
import { Progress } from "@material-tailwind/react";
import ReviewForm from "../features/restaurant/ReviewForm";
import { useState, useEffect } from "react";
import axios from "../config/axios";
import useAuth from "../Hooks/use-auth";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function RestaurantReview({ resId, allreviewMessage, res }) {
  const { authUser } = useAuth();
  // console.log(authUser);

  console.log(`ALLREVIEWMESSAGE`, allreviewMessage);

  const [averageScore, setAverageScore] = useState(0);
  const [cusInfo, setCusInfo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  const handleOpen = () => setOpen(!open);

  const checkCusId = allreviewMessage?.reviews?.find(
    (item) => item.customerId === authUser?.id
  );

  const totalScore = allreviewMessage?.reviews?.reduce((acc, review) => {
    return acc + review.score;
  }, 0);

  useEffect(() => {
    allreviewMessage?.getCusId?.map((item) => setCusInfo(item));
  }, [cusInfo]);

  useEffect(() => {
    const newAverageScore = totalScore / allreviewMessage?.reviews?.length;
    setAverageScore(newAverageScore);
    // console.log(averageScore);
  }, [totalScore, averageScore]);

  const [isOpenAfterComplete, setIsOpenAfterComplete] = useState(false);

  const handleDeleteReview = (reviewId) => {
    axios
      .delete(`http://localhost:8888/review/${reviewId}`)
      .then((res) => {
        handleOpen();
        setForceUpdate((prev) => prev + 1);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("Force update effect");
  }, [forceUpdate]);

  const scoreCounts = {};
  res?.Reviews.forEach((item) => {
    const score = item.score;
    // no score
    if (!scoreCounts[score]) {
      scoreCounts[score] = 1;
      // have score + 1
    } else {
      scoreCounts[score]++;
    }
  });

  return (
    <div className="w-full pt-4 my-10 border shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-evenly text-red-600 text-xl">
          <div className="font-bold">Reviews(xx,xxx)</div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center w-20 h-20 border-4 border-red-600 rounded-full text-2xl font-semibold">
              {averageScore ? averageScore.toFixed(1) : "-"}
            </div>
            <div>xx,xxx Reviews</div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              {[...Array(5)].map((item, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
            <div className="flex">
              {[...Array(4)].map((item, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
            <div className="flex">
              {[...Array(3)].map((item, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
            <div className="flex">
              {[...Array(2)].map((item, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
            <div className="flex">
              <AiFillStar />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-32">
            <Progress value={scoreCounts["5"]} color="red" />
            <Progress value={scoreCounts["4"]} color="red" />
            <Progress value={scoreCounts["3"]} color="red" />
            <Progress value={scoreCounts["2"]} color="red" />
            <Progress value={scoreCounts["1"]} color="red" />
          </div>
        </div>
        {authUser && authUser.firstName ? (
          <button
            className="p-3 text-center bg-primary self-center text-white cursor-pointer rounded-md"
            onClick={() => setIsOpenAfterComplete(!isOpenAfterComplete)}
          >
            Review Us!
          </button>
        ) : undefined}
        <div>
          <ReviewForm isOpenAfterComplete={isOpenAfterComplete} resId={resId} />
        </div>
        <div className="w-full border-b-2"></div>
        <div className="flex flex-col">
          {allreviewMessage?.reviews?.map((item, index) => (
            <div key={index}>
              <div className="flex py-4 px-2">
                <div className="w-40 px-10 pt-2 text-xs">
                  <div className="w-full">
                    <img
                      src={item.customer.profileImg}
                      className="rounded-full"
                    />
                    <p className="text-center font-semibold text-sm">
                      {item.customer.firstName}
                    </p>
                  </div>
                  {/* <div>{cusInfo.id === item.customerId ? <p>{customerInfo.name}</p> : <p>BULL</p>}</div> */}
                  <div>{item.createAt}</div>
                </div>
                <div className="flex flex-col gap-[6px] flex-1">
                  <div>{item.restaurant}</div>
                  <div className="flex">
                    {[...Array(item.score)].map((item, index) => (
                      <AiFillStar key={index} color="orange" />
                    ))}
                  </div>
                  <div>{item.message}</div>
                  <div className="flex gap-3 w-20 h-20">
                    {item.ReviewImages?.map((item) => (
                      <img src={item.url} key={`${index}-${item.url}`} />
                    ))}
                  </div>
                </div>
                {checkCusId && item.customerId === authUser.id ? (
                  <div className="p-3 bg-secondary text-white h-10 flex items-center">
                    <button onClick={() => handleDeleteReview(item.id)}>
                      Delete
                    </button>
                  </div>
                ) : undefined}
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Delete Review</DialogHeader>
        <DialogBody>Delete Success</DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
