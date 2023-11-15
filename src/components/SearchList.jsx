import React from "react";
import useRes from "../Hooks/use-res";
import AvatarForSeach from "../assets/AvatarForSearch";
import AvatarForSearch from "../assets/AvatarForSearch";
import { useNavigate } from "react-router-dom";

function SearchList({ searchInput }) {
  const navigate = useNavigate();
  const { restaurantAll } = useRes();
  const handleClick = (id) => navigate(`/restaurant/${id}`);
  let searchResArr = restaurantAll.filter((x) =>
    x.restaurantName.toLowerCase().includes(searchInput)
  );
  console.log(searchResArr);
  console.log("input", searchInput);
  if (searchInput.length === 0) {
    searchResArr = [];
  }

  return (
    <div>
      {searchResArr.length > 0 && (
        <ul className="border top-2py-1 z-50  absolute w-full h-14 rounded-xl">
          {searchResArr.map((x) => (
            <li
              key={x.id}
              className="cursor-pointer hover:bg-gray-200 rounded-md px-4 py-2 flex gap-4 h-14 transition"
              onClick={() => handleClick(x.id)}
            >
              <div className="flex items-center">

              <AvatarForSearch src={x.profileImg} />
              </div>
              <p className="flex items-center">{x.restaurantName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchList;
