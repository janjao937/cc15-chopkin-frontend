import React from "react";
import defaultImg from "./blank.png";

function AvatarForSearch({ src }) {
  return (
    <div>
      <img
        src={src || defaultImg}
        alt=""
        className="rounded-full aspect-square max-w-[2.0rem]"
      />
    </div>
  );
}

export default AvatarForSearch;
