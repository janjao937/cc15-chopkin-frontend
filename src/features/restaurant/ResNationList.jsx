import React from "react";
import ResNationItem from "./ResNationItem";

export default function ResNationList({ data }) {
  // console.log("nationList =>", data);

  return (
    <div className="border border-gray-200 rounded-3xl max-w-[350px] cursor-pointer hover:shadow-lg hover:transition">
      <ResNationItem
        objData={data}
        profileImg={data.profileImg}
        name={data.restaurantName}
        catIndex={data.categoryIndex}
        price={data.price}
        status={data.status}
      />
    </div>
  );
}
