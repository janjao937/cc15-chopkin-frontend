import { useState } from "react";
import { useRef } from "react";
import useAuth from "../Hooks/use-auth";
import DropdownCategory from "../features/auth/DropdownCategory";
import DropdownNation from "../features/auth/DropdownNation";
import profileImage from "../assets/logo.png";
import axios from "../config/axios";
import { useEffect } from "react";

export default function EditResInfo() {

  const fileEl = useRef(null);
  const [info, setInfo] = useState(new FormData());

  const [input, setInput] = useState({
    restaurantName: "",
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    password: "",
    phone: "",
    districtIndex:"",
    categoryIndex: "",
    nationIndex: "",
    latitude: "",
    longitude: "",
    price: 0,
    businessTime: [{ day: 5 }, { openTime: "asds" }, { closedTime: "zxc" }],
  });

  const [file, setFile] = useState(null);

  const [day, setDay] = useState({});
  const [openTime, setOpenTime] = useState({});
  const [closedTime, setClosedTime] = useState({});
  const [business, setBusiness] = useState();

  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDay = (e) => {
    const updatedDay = { [e.target.name]: e.target.value };
    setDay(updatedDay);
  };

  const handleOpenTime = (e) => {
    const updateOpenTime = { [e.target.name]: e.target.value };
    setOpenTime(updateOpenTime);
  };

  const handleClosedTime = (e) => {
    const updatedClosedTime = { [e.target.name]: e.target.value };
    setClosedTime(updatedClosedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = new FormData();
    if (file) {
      info.append("profileImg", file);
    }
    if (input.restaurantName) {
      info.append("restaurantName", input.restaurantName);
    }
    if (input.price) {
      info.append("price", Number(input.price));
    }
    if (input.categoryIndex) {
      info.append("categoryIndex", input.categoryIndex);
    }
    if (input.districtIndex) {
      info.append("districtIndex", input.districtIndex);
    }
    if (input.nationIndex) {
      info.append("nationIndex", input.nationIndex);
    }
    if (input.businessTime) {
      info.append("businessTime", input.businessTime);
    }

    setInfo(info);
    console.log(info);

    const res = axios
      .post(`http://localhost:8888/restaurant/edit`, { info: input }, info)
      .then((res) => console.log(res))
      .then(
        (res) => console.log(res)
        // axios.patch(
        //   `http://localhost:8888/restaurant/updateStatus/${res.id}`,
        //   input
        // )
      )
      .catch((e) => console.log(e));
  };

  const { authUser } = useAuth();

  //   console.log(authUser);

  console.log(input);

  return (
    <div className="flex px-40 ">
      {/* Resaurant Start Info */}
      <section className="flex-1 shadow-md border p-5 flex flex-col gap-5">
        <p>
          profileImg:
          {authUser.profileImg ? (
            <img src={authUser.profileImg} alt="" />
          ) : (
            <img src={profileImage} className="w-[400px]"></img>
          )}
        </p>
        <p>ResId: {authUser.id}</p>
        <p>restaurantName: {authUser.restaurantName}</p>
        <p>Email: {authUser.email}</p>
        <p>ownerFirstName: {authUser.ownerFirstName}</p>
        <p>ownerLastName :{authUser.ownerLastName}</p>
        <p>phone: {authUser.phone}</p>
        <p>start price: {authUser.price}</p>
      </section>

      {/* Restaurabt New Info */}
      {/* Create to db: createEditPending */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 shadow-md border p-5 flex flex-col gap-2"
      >
        {file ? (
          <div onClick={() => fileEl.current.click()}>
            <img src={URL.createObjectURL(file)} alt="" />
          </div>
        ) : (
          <input
            className="h-10 p-3"
            type="file"
            ref={fileEl}
            name="profileImg"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        )}
        <p>restaurantName</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="restaurantName"
        />
        <p>price</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="price"
        />
        <p>email</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="email"
        />
        <p>password</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="password"
        />
        <p>phone</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="phone"
        />
        <p>category</p>
        <div>
          <DropdownCategory input={input} setInput={setInput} />
          {error.categoryIndex && (
            <InputErrorMessage message={error.categoryIndex} />
          )}
        </div>
        <p>nation</p>
        <div>
          <DropdownNation input={input} setInput={setInput} />
          {error.nationIndex && (
            <InputErrorMessage message={error.nationIndex} />
          )}
        </div>
        <p>day</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleDay}
          name="day
          "
        />
        <p>openTime</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleOpenTime}
          name="openTime
          "
        />
        <p>closedTime</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleClosedTime}
          name="closedTime
          "
        />
        <p>latitude</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="latitude"
        />
        <p>longitude</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="longitude"
        />
        <button className="p-2 bg-blue-500 text-white">Confirms</button>
      </form>
    </div>
  );
}
