import PageName from "../components/PageName";
import RestaurantList from "../features/restaurant/RestaurantList";
import MyButton from "../components/MyButton";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import { FaSearch } from "react-icons/fa";
import SearchInput from "../components/SearchInput";

export default function RecommendedPage() {
  const [openSearch, setIsOpenSearch] = useState(false);
  const [restaurantAll, setRestaurantAll] = useState([]);

  useEffect(() => {
    const fatchResAll = async () => {
      try {
        const res = await axios.get("/restaurant/all");
        console.log("fatchResAll=>", res.data);
        setRestaurantAll(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fatchResAll();
  }, []);

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
            <SearchInput placeholder="Search a restaurant" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 lg:px-32 md:px-16 sm:px-3">
        <PageName name="Recommend Restaurant"></PageName>
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {restaurantAll.map((item, index) => (
            <div key={index}>
              <RestaurantList data={item} recommended={true}></RestaurantList>
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
