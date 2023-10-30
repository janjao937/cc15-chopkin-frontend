import { AiFillStar } from "react-icons/ai";
import PageName from "../components/PageName";
import RestaurantList from "../features/restaurant/RestaurantList";
import MyButton from "../components/MyButton";

const mocRestaurant = [
  {
    id: 1,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 2,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 3,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 4,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 5,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 6,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
  {
    id: 7,
    restaurantImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww",
    restaurantName: "reataurantName",
    resType: "Thai",
    star: <AiFillStar size={30} className="text-yellow-400" />,
    price: 1000,
  },
];
export default function AllRestuarantPage() {
  return (
    <>
    <div className="flex flex-col gap-5 lg:px-32 md:px-16 sm:px-3">
      <PageName name="Recommend Restaurant"></PageName>
      <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mocRestaurant.map((item, index) => (
          <div key={index}>
            <RestaurantList data={item}></RestaurantList>
          </div>
        ))}
      </div>
      <div className="text-center py-8">
        <MyButton style={`py-3 px-6 rounded-full bg-secondary`}>Show More</MyButton>
      </div>
    </div>
    </>
  );
}
