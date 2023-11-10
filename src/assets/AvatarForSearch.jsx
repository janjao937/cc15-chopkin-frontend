import React from "react";
import defaultImg from "./blank.png";

function AvatarForSearch({ src }) {
  return (
    <div>
      <img
        src={src || defaultImg}
        alt=""
        className="rounded-full aspect-square max-w-[1.5rem]"
      />
    </div>
  );
}

export default AvatarForSearch;
