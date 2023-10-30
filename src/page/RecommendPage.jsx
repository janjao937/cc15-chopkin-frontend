import PageName from "../components/PageName";
import RestaurantList from "../features/restaurant/RestaurantList";
import { AiFillStar } from "react-icons/ai";
import MyButton from "../components/MyButton";
import { useEffect } from "react";
const mocRestaurant = [
  {
    id: 1,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 2,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 3,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 4,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 5,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 6,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 7,
    restaurantImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
];

export default function RecommendedPage() {
  return (
    <div className="flex flex-col gap-5 px-16">
      <PageName name="Recommend Restaurant"></PageName>
      <div className="gap-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {mocRestaurant.map((item, index) => (
          <div key={index}>
            <RestaurantList data={item}></RestaurantList>
          </div>
        ))}
      </div>
      <div className="text-center py-8">
        <MyButton style={`py-3 px-6 rounded-full`}>Show More</MyButton>
      </div>
    </div>
  );
}
