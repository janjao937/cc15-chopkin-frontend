import { AiFillStar } from "react-icons/ai";

export default function RestaurantReview() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly">
        <div>Reviews</div>
        <div>About</div>
        <div>How to use</div>
      </div>

      <div>
        <div>4.8</div>
        <div>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <AiFillStar />
          </div>
        </div>

        <div></div>
      </div>
      <div></div>
    </div>
  );
}
