import React from "react";

export default function RestaurantItem({
  image,
  name,
  type,
  starImage,
  price,
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full h-[200px] border">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-lg "
          />
        </div>
        <div className="p-4">
          <div className="font-semibold text-lg">{name}</div>
          <div className="font-light text-md ">{type}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div>{starImage}</div>
              <div>3.0</div>
            </div>
            <div>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
