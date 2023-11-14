import PageName from "../components/PageName";
import RestaurantList from "../features/restaurant/RestaurantList";
import MyButton from "../components/MyButton";
import useRes from "../Hooks/use-res";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function AllRestuarantPage() {
  const { restaurantAll } = useRes();
  const [openSearch, setIsOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="flex justify-end pt-2 pr-10">
        <FaSearch
          size={25}
          className="fixed z-10 fill-red-500 cursor-pointer"
          onClick={() => setIsOpenSearch(!openSearch)}
        />
        {openSearch && (
          <div className="fixed">
            <SearchInput
              placeholder="Search a restaurant"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 lg:px-32 md:px-16 sm:px-3">
        <PageName name="All Restaurant"></PageName>
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {restaurantAll.map((item, index) => (
            <div key={index}>
              <RestaurantList data={item}></RestaurantList>
            </div>
          ))}
        </div>
        <div className="text-center py-8">
          <MyButton style={`py-3 px-6 rounded-full bg-secondary`}>
            Show More
          </MyButton>
        </div>
      </div>
    </>
  );
}
