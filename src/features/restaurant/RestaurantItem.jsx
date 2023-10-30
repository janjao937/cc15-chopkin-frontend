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
      <div className="w-full h-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-fill rounded-t-3xl"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="font-light text-md ">{type}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div>{starImage}</div>
            <div className="text-primary font-semibold">3.0</div>
          </div>
          <div className="text-primary font-semibold">{price}</div>
        </div>
      </div>
    </>
  );
}
