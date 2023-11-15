import React from "react";
import useRes from "../Hooks/use-res";
import { dataCuisine } from "../data/dataRes";
import RestaurantList from "../features/restaurant/RestaurantList";
import DefaultCarousel from "../components/DefaultCarousel";
import CuisineList from "../features/restaurant/CuisineList";
import { MdKeyboardArrowRight } from "react-icons/md";
import bgHome from "../assets/image/bgHome.png";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchList from "../components/SearchList";
import { useState } from "react";
import Loading from "../components/Loading";
import PageName from "../components/PageName";
import { Carousel } from "@material-tailwind/react";

export default function HomePage() {
  const { restaurantAll, homeLoading } = useRes();
  const [searchInput, setSearchInput] = useState("");
  if (homeLoading) return <Loading />;
  return (
    <div className="flex flex-col gap-3">
      {/* image */}
      <div className="mb-8 relative ">
        <div className="h-[300px] w-full ">
          <img
            src={bgHome}
            alt="bgHome"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Search */}
        <div className="absolute bottom-[-8%] left-1/2 transform -translate-x-1/2">
          <SearchInput
            placeholder="Search a restaurant"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchList searchInput={searchInput} />
        </div>
      </div>

      {/* Recommended Restaurants */}
      <div className="mb-4 px-32">
        <div className="text-2xl font-semibold font-kanit">
          Recommended Restaurants !
        </div>
        <div className=" mb-2">
          {/* It's on trend right now, try it! */}
          <Link to="/recommended">
            <span className="flex items-center text-red-600 cursor-pointer text-lg">
              See More <MdKeyboardArrowRight size={30} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-4 place-items-center">
          {restaurantAll?.map((item, index) => (
            <div key={index}>
              <RestaurantList data={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 px-32">
        <div className=" h-[300px] w-full ">
          <Carousel
            className="rounded-xl h-[300px] w-full"
            transition={{ duration: 1 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1677192450757-58aa16e74205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>

      {/* Top Cuisine */}
      <div className="flex flex-col gap-4">
        <PageName name="Top Cuisine"></PageName>
        <div className="flex justify-between px-32">
          {dataCuisine.map((item, index) => (
            <div key={index}>
              <CuisineList data={item} />
            </div>
          ))}
        </div>

        {/* All Restaurants */}
        <div className="pt-5 pb-12 px-32">
          <h1 className=" text-2xl font-semibold">All Restaurants</h1>
          <div className="flex items-center gap-2 mb-2">
            {/* It's on trend right now, try it! */}
            <Link to="/all-restaurants">
              <span className="flex items-center text-red-600 cursor-pointer">
                See More <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-4 place-items-center">
          {restaurantAll?.map((item, index) => (
            <div key={index}>
              <RestaurantList data={item} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
