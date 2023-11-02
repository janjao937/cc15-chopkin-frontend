import Image from "../assets/blank.png";
import MyOutlineButton from "../components/MyOutlineButton";
import UserProfileButton from "../components/userProfile/UserProfileButton";
import UserProfileInfo from "../components/userProfile/UserProfileInfo";
import BookingCard from "../components/userProfile/BookingCard";
import BookingHistoryCard from "../components/userProfile/BookingHistoryCard";

const mocReservation = [
  {
    id: 1,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Dine-in",
  },
  {
    id: 2,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Dine-in",
  },
  {
    id: 3,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Dine-in",
  },
  {
    id: 4,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Dine-in",
  },
];

const mocBookingHistory = [
  {
    bookingId: 1,
    name: "restaurant_name",
    dateTime: "19-02-1999",
    resType: "Arrived",
  },
  {
    bookingId: 2,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
  {
    bookingId: 3,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
  {
    bookingId: 4,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
  {
    bookingId: 5,
    name: "restaurant_name",
    dateTime: "19-02-1999",
    resType: "Arrived",
  },
  {
    bookingId: 6,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
  {
    bookingId: 7,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
  {
    bookingId: 8,
    name: "restaurant_name",
    dateTime: "19-10-1999",
    resType: "Arrived",
  },
];

export default function UserProfile() {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col">
        {/* left side */}
        <aside className="flex flex-col h-[83vh] items-center lg:w-[25vw] md:w-[25vw] xs:w-full">
          <img src={Image} alt="" className="rounded-full w-[200px] mt-3" />
          <div className="flex flex-col gap-3 items-center pt-3">
            <MyOutlineButton
              outlinestyle={`outline-primary`}
              textstyle={`text-primary `}
            >
              Edit Profile
            </MyOutlineButton>
            <div className="bg-secondary text-center text-white font-semibold py-3 w-[300px]">
              Reservation
            </div>

            {/* Button */}
            <div className="w-full flex flex-col items-start gap-3">
              <UserProfileButton>Favorite</UserProfileButton>
              <UserProfileButton>Booking History</UserProfileButton>
              <UserProfileButton>My Vouchers</UserProfileButton>
              <UserProfileButton>My Offer and Gift Card</UserProfileButton>
              <UserProfileButton>Benefits</UserProfileButton>
              <UserProfileButton>My Addresses</UserProfileButton>
            </div>
          </div>
        </aside>

        {/* right side */}
        <main className="flex-1 p-3 flex gap-8 flex-col">
          {/* section1 */}
          <section className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col">
            <div className="flex-1 lg:items-center">
              <p className="font-bold">
                Hello, username! Are you feeling hungry today?
              </p>
              <UserProfileInfo
                icon="icon"
                text="name"
                value="username"
              ></UserProfileInfo>
              <UserProfileInfo
                icon="icon"
                text="email"
                value="a@gmail.com"
              ></UserProfileInfo>
              <UserProfileInfo
                icon="icon"
                text="phone"
                value="xxxxxxxxxx"
              ></UserProfileInfo>
              <UserProfileInfo
                icon="icon"
                text="referral Code?"
                value="xxxxxx"
              ></UserProfileInfo>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-gradient-to-r from-gray-400 to-white border w-[60%] h-[100%] rounded-2xl flex xs:p-3">
                <div className="flex-1 flex items-center justify-center text-3xl font-bold">
                  Silver
                </div>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <p>My Member Point</p>
                  <p>XXX</p>
                  <MyOutlineButton outlinestyle={`outline w-[80%]`}>
                    Point History
                  </MyOutlineButton>
                </div>
              </div>
            </div>
          </section>

          {/* section2 */}
          <section>
            <p className="font-bold">Upcoming Reservation</p>
            <div className="flex flex-wrap gap-8 lg:justify-start xs:justify-center">
              {mocReservation.map((item, index) => (
                <BookingCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  date={item.dateTime}
                  type={item.resType}
                ></BookingCard>
              ))}
            </div>
          </section>

          <div className="bg-secondary w-full h-[2px] text-center"></div>

          {/* section3 */}
          <section>
            <p className="font-bold">Booking History</p>
            <div className="flex flex-wrap gap-8 py-5 lg:justify-start xs:justify-center">
              {mocBookingHistory.map((item, index) => (
                <BookingHistoryCard
                  key={index}
                  id={item.bookingId}
                  name={item.name}
                  date={item.dateTime}
                  type={item.resType}
                ></BookingHistoryCard>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
