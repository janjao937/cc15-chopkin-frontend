import { useState } from "react";
import MyButton from "../components/MyButton";
import MyStepper from "../components/Stepper";
import MyRadio from "../components/MyRadio";
import RestaurantReview from "../components/RestaurantReview";
import useAuth from "../Hooks/use-auth";
import { useParams } from "react-router-dom";
import useRes from "../Hooks/use-res";
import profileImage from "../assets/logo.png";
import { useEffect } from "react";
import axios from "../config/axios";
import useBooking from "../Hooks/use-booking";

const mockRestuarantInfo = {
  id: 1,
  resName: "RestaurantName",
  restaurantImage:
    "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVhcmFudHxlbnwwfHwwfHx8MA%3D%3D",
  resType: "International",
  location: "พญาไท",
  dateTime: "12.00 - 19.15",
};

const mockPackage = [
  {
    id: 1,
    packageName: "Premium Buffet",
    packageInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
    price: 3000,
    menuImage:
      "https://images.unsplash.com/photo-1625173616412-7b403d49a41e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    packageName: "Great Great Harbour: Weekday Buffet",
    packageInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
    price: 3000,
    menuImage:
      "https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    packageName: "Great Harbour: Weekend Buffet ",
    packageInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
    price: 3000,
    menuImage:
      "https://images.unsplash.com/photo-1579042877201-21342f2083a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    packageName: "Great Harbour: วันหยุดยาว",
    packageInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
    price: 3000,
    menuImage:
      "https://images.unsplash.com/photo-1617298452285-ceb241df5c67?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function RestaurantInfoPage() {
  // const {allPackage} = useBooking();
  const [allreviewMessage, setAllReviewMessage] = useState([]);
  const [allBusinessTime, setAllBusinessTime] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/review/${resId}`)
      .then((res) => setAllReviewMessage(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(allreviewMessage);

  const [allPackage, setAllPackage] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8888/package/getAll/${resId}`)
      .then((res) => setAllPackage(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(allPackage);

  const { authUser } = useAuth();
  const { resId } = useParams();
  const isRestaurant = authUser?.restaurantName;
  const isCustomer = authUser?.firstName;
  const isAdmin = authUser?.isAdmin;

  const { restaurantAll } = useRes();

  // console.log(authUser);
  console.log(`resId=======>`, resId);
  console.log(`Res All=====>`, restaurantAll);

  const res = restaurantAll.find((item) => item.id === resId);
  console.log("myRes =>", res);

  const [openMenu, setOpenMenu] = useState(false);
  const [booking, setBooking] = useState(false);

  const handleOpenMenu = (itemId) => {
    setOpenMenu(itemId === openMenu ? null : itemId);
  };

  const handleBooking = () => {
    setBooking(!booking);
  };

  // useEffect(()=>{
  //   console.log('RES IS ========:',res.BusinessTimes.map((item)=> setDate(item.openTime)));
  // },[]);

  return (
    <div className="flex flex-col justify-center">
      <main className="flex px-64 gap-5">
        <section className="flex-1 flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex items-center">
              {/* <img src={profileImage} className="w-[100px]"></img> */}
              {res?.profileImg ? (
                <img
                  className="w-[100px] rounded-full"
                  src={res.profileImg}
                  alt=""
                />
              ) : (
                <img src={profileImage} className="w-[100px]"></img>
              )}
              <div>
                <p className="text-xl font-semibold">{res?.restaurantName}</p>
                {/* <p>res name</p> */}
                <div className="flex gap-5">
                  <p className="">Open Time:</p>
                  <p className="">{mockRestuarantInfo.dateTime}</p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[400px] h-[200px]"
                src={mockRestuarantInfo.restaurantImage}
                alt=""
              />
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div>
            test
          </div>

          {allPackage.length > 0 ? <div>
            <p className="font-light">Packages</p>
            <div className="border-l-8 shadow-xl border-primary">
              {allPackage.map((item, index) => (
                <section key={index}>
                  <div className="flex py-10 px-4 border border-gray-100">
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-semibold">{item.name}</p>
                      <button
                        onClick={() => handleOpenMenu(item.id)}
                        className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4 text-primary`}
                      >
                        Menu
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs">{item.detail}</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p>{item.price}</p>
                    </div>
                    {/* <MyButton style={`bg-primary h-[40px] rounded-md`}>
                      Booking
                    </MyButton> */}
                  </div>

                  {openMenu === item.id ? (
                    <div>
                      <div className="flex p-4">
                        <div className="flex-1">
                          <p>รอบเวลาที่เปิดจอง</p>

                          <div className="flex justify-around">
                            <section className="flex">
                              {/* {res.map((item,index)=> <p>{item.businessTimes}</p>)} */}
                              {/* <div className="flex-1">
                                <p>Monday</p>
                                <p>Tuesday</p>
                                <p>Wednesday</p>
                                <p>Thursday</p>
                                <p>Friday</p>
                                <p>Saturday</p>
                                <p>Sunday</p>
                              </div> */}

                              <div className="">
                                {res?.BusinessTimes.map((item, index) => (
                                  <div className="flex gap-10" key={index}>
                                    <p>
                                      {item.day == 1
                                        ? "mon"
                                        : item.day == 2
                                        ? "tue"
                                        : item.day == 3
                                        ? "wed"
                                        : item.day == 4
                                        ? "thurs"
                                        : item.day == 5
                                        ? "fri"
                                        : item.day == 6
                                        ? "sat"
                                        : "sun"}
                                    </p>
                                    <p>{item.openTime}</p>
                                    <p>-</p>
                                    <p>{item.closedTime}</p>
                                  </div>
                                ))}
                              </div>
                            </section>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p>รายละเอียดแพ็กเกจ</p>
                          <p>{item.detail}</p>
                        </div>
                      </div>
                      <img className="w-full" src={item.img} alt="" />
                      <div className="text-center p-4">
                        <button
                          onClick={handleOpenMenu}
                          className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4`}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : undefined}
                </section>
              ))}
            </div>
          </div> : <p className="text-center p-5 border bg-gray-200">No package</p>}
        </section>

        {isCustomer && (
          <section className="w-[300px] self-start  border border-gray-100 shadow-md sticky top-16 max-h-[500px] overflow-auto">
            <div className="w-full py-4 px-8">
              {booking ? (
                <div className="flex flex-col gap-4">
                  {/* <MyRadio /> */}

                  <MyStepper
                    setBooking={setBooking}
                    booking={booking}
                    allPackage={allPackage}
                    resId={resId}
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-primary">Click to Book</p>
                  <hr />
                  <MyButton
                    style={`bg-secondary w-full rounded-full`}
                    onClick={handleBooking}
                  >
                    BOOK NOW
                  </MyButton>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      {/* {authUser.firstName ? <RestaurantReview /> : undefined} */}
      <div className="flex justify-center gap-5  px-64">
        <RestaurantReview
          resId={resId}
          allreviewMessage={allreviewMessage}
          res={res}
        />
      </div>
    </div>
  );
}
