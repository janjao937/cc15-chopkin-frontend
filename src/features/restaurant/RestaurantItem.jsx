import React from "react";
import blank from "../../assets/blank.png";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { categoryIndex } from "../../data/dataRes";

export default function RestaurantItem({
  objRes,
  name,
  profileImg,
  price,
  catIndex,
  reviews,
  avgScore,
  recommended,
}) {
  const category = categoryIndex.filter((item) => item.id === +catIndex);
  const averageScore =
    reviews.reduce((acc, el) => (acc += el.score), 0) / reviews.length;

  if (recommended && avgScore >= 4) {
    return (
      <>
        <Link to={`/restaurant/${objRes.id}`}>
          <div className="w-full h-[200px]">
            <img
              src={profileImg || blank}
              alt={name}
              className="w-full h-full object-fill rounded-t-lg"
            />
          </div>
          <div className="p-2">
            <div className="font-semibold text-lg">{name}</div>
            <div className="font-light text-md ">{category[0].title}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {reviews.length === 0 ? (
                  <>
                    <div>
                      <AiFillStar size={20} className="text-gray-400" />
                    </div>
                    <div className="text-primary">No review</div>
                  </>
                ) : (
                  <>
                    <div>
                      <AiFillStar size={20} className="text-yellow-400" />
                    </div>
                    <div className="text-primary font-semibold">
                      {avgScore?.toFixed(1)}
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-1">
                <div className="flex justify-center items-center text-xs">
                  Starting Price :
                </div>
                <div className="text-primary font-semibold">{price}</div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  } else if (!recommended) {
    return (
      <>
        <Link to={`/restaurant/${objRes.id}`}>
          <div className="w-full h-[200px]">
            <img
              src={profileImg || blank}
              alt={name}
              className="w-full h-full object-fill rounded-t-lg"
            />
          </div>
          <div className="py-2 mx-3">
            <div className="font-semibold text-lg">{name}</div>
            <div className="font-light text-md ">{category[0].title}</div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                {reviews.length === 0 ? (
                  <>
                    <div>
                      <AiFillStar size={17} className="text-gray-400" />
                    </div>
                    <div className="text-primary text-sm">No review</div>
                  </>
                ) : (
                  <>
                    <div>
                      <AiFillStar size={20} className="text-yellow-400" />
                    </div>
                    <div className="text-primary font-semibold">
                      {averageScore?.toFixed(1)}
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-1">
                <div className="flex justify-center items-center text-[.8rem]">
                  Starting Price :
                </div>
                <div className="text-primary font-semibold text-[.8rem]">
                  {price}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}
