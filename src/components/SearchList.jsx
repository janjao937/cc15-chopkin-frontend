import React from "react";
import useRes from "../Hooks/use-res";
import AvatarForSeach from "../assets/AvatarForSearch";
import AvatarForSearch from "../assets/AvatarForSearch";
import { useNavigate } from "react-router-dom";

function SearchList({ searchInput }) {
  const navigate = useNavigate();
  const { restaurantAll } = useRes();
  const handleClick = (id) => navigate(`/restaurant/${id}`);
  return (
    <div>
      {searchInput.length > 0 && (
        <ul className="border border-gray-600 rounded-lg top-2py-1 z-50 bg-white absolute w-full">
          {restaurantAll.map((x) => (
            <li
              key={x.id}
              className="cursor-pointer hover:bg-gray-200 rounded-md px-4 py-2 flex gap-4"
              onClick={() => handleClick(x.id)}
            >
              <AvatarForSearch src={x.profileImg} />
              <p>{x.restaurantName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchList;
