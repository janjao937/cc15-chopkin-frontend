import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import defaultImage from "../assets/blank.png";
import { Progress } from "@material-tailwind/react";
import ReviewForm from "../features/restaurant/ReviewForm";
import { useState, useEffect } from "react";
import axios from "../config/axios";
import { toast } from "react-toastify";
import useAuth from "../Hooks/use-auth";
import Loading from "./Loading";

export default function RestaurantReview({
  resId,
  allreviewMessage,
  res,
  setAllReviewMessage,
  allPackage,
}) {
  const { authUser } = useAuth();
  // console.log(authUser);

  console.log(`ALLREVIEWMESSAGE`, allreviewMessage);

  const [averageScore, setAverageScore] = useState(0);
  const [cusInfo, setCusInfo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [forceUpdate, setForceUpdate] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

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

  const handleDeleteReview = async (reviewId) => {
    try {
      handleOpen();
      // setLoading(true);
      await axios.delete(`http://localhost:8888/review/${reviewId}`);
      setAllReviewMessage((prevReviewMessage) => {
        // Assuming allreviewMessage is an object with a 'reviews' property
        const updatedReviews = prevReviewMessage.reviews.filter(
          (review) => review.id !== reviewId
        );

        return {
          ...prevReviewMessage,
          reviews: updatedReviews,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      // toast.success("Your request has been submitted...");
    }
    // setLoading(false);
    // console.log("reviewId", reviewId);
  };

  useEffect(() => {
    console.log("Force update effect");
  }, [allreviewMessage, setAllReviewMessage]);

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
      {loading && <Loading />}
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
        {authUser && authUser.firstName && allPackage.length > 0 ? (
          <button
            className="px-4 self-center py-2 bg-primary text-white cursor-pointer hover:bg-orange-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md"
            onClick={() => setIsOpenAfterComplete(!isOpenAfterComplete)}
          >
            Review Us!
          </button>
        ) : undefined}
        <div>
          <ReviewForm
            isOpenAfterComplete={isOpenAfterComplete}
            resId={resId}
            allreviewMessage={allreviewMessage}
            setAllReviewMessage={setAllReviewMessage}
          />
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
                  <div className="px-4 py-2 h-10 bg-secondary text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md">
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
