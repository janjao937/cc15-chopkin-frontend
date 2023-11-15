import { useState } from "react";
import { useRef } from "react";
import useAuth from "../Hooks/use-auth";
import DropdownCategory from "../features/auth/DropdownCategory";
import DropdownNation from "../features/auth/DropdownNation";
import profileImage from "../assets/logo.png";
import axios from "../config/axios";
import useRes from "../Hooks/use-res";
import { allDistricts } from "../data/dataRes";
import ShowOnlyMap from "../features/googleMaps/ShowOnlyMap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MapComponent from "../features/googleMaps/MapComponent";
import Modal from "./Modal";
import DropdownLocation from "../features/auth/DropdownLocation"

export default function EditResInfo({ handleOnSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const { input, setInput, selected } = useRes();
  // const handleGoogleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: +e.target.value });
  // };

  // const handleGoogleSubmit = (e) => {
  //   e.preventDefault();
  //   setInput((prev) => {
  //     return { ...prev, position: selected };
  //   });
  //   setIsOpen(false);
  // };



  const { business } = useRes();
  console.log(`BUSINESS`, business);

  const { restaurantAll } = useRes();
  const { resId } = useParams();

  // console.log(`resId=======>`, resId);

  const res = restaurantAll.find((item) => item.id === resId);
  // console.log("myRes =>", res);

  const fileEl = useRef(null);
  // const [input, setInput] = useState({
  //   restaurantName: "",
  //   ownerFirstName: "",
  //   ownerLastName: "",
  //   // email: "",
  //   // password: "",
  //   // phone: "",
  //   districtIndex: "",
  //   categoryIndex: "",
  //   nationIndex: "",
  //   position: {
  //     lat: "",
  //     lng: "",
  //   },
  //   // latitude: "",
  //   // longitude: "",
  //   price: 0,
  //   businessTime: business,
  // });

  useEffect(() => {
    setInput((input) => {
      return { ...input, businessTime: business };
    });
  }, [business]);

  const [file, setFile] = useState(null);
  const [error, setError] = useState({});

  // console.log(`BUSINESS ======== :: `, business);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setInput({ ...input, position: { ...input.position, [name]: value } });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  // console.log(`==================`,input.position);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    // console.log(`***************`,business);
    if (file) {
      formdata.append("profileImg", file);
    }
    if (input.restaurantName) {
      formdata.append("restaurantName", input.restaurantName);
    }
    if (input.price) {
      formdata.append("price", Number(input.price));
    }
    if (input.categoryIndex) {
      formdata.append("categoryIndex", input.categoryIndex);
    }
    if (input.districtIndex) {
      formdata.append("districtIndex", input.districtIndex);
    }
    if (input.nationIndex) {
      formdata.append("nationIndex", input.nationIndex);
    }
    if (input.position) {
      formdata.append("position", input.position);
    }
    if (business) {
      formdata.append("businessTime", JSON.stringify(business));
    }

    handleOnSubmit();

    axios
      .post(`http://localhost:8888/restaurant/edit`, formdata)
      .then((res) => console.log(res))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const { authUser } = useAuth();

  console.log(input);

  const handleLocationChange = (newPosition) => {
    setInput((prevInput) => ({
      ...prevInput,
      position: newPosition,
    }));
  };

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
            name="file"
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
        <p>starter price</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="price"
        />

        {/* <p>email</p>
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
				/> */}
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
        <p>district</p>
        <div>
          <select
            name="districtIndex"
            id="districtIndex"
            className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
            onChange={(e) => {
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              });
            }}
          >
            <option value="selected">DISTRICT</option>
            {allDistricts.map((item, index) => {
              return (
                <option
                  name="districtIndex"
                  key={index}
                  id={item.id}
                  value={index + 1}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <p>Location</p>
        <DropdownLocation onLocationChange={handleLocationChange} />
        {/* <p>Lat</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleGoogleChangeInput}
          name="lat"
        />
        <p>Long</p>
        <input
          type="text"
          className="border h-12"
          onChange={handleChangeInput}
          name="lng"
        /> */}

        {/* GOOGLE MAP */}
        {/* <div className="flex flex-col items-center relative right-[38%] gap-3">
            <div className="border-2 rounded-md">
              <ShowOnlyMap center={{ lat: res.latitude, lng: res.longitude }} />
            </div>
            <a
              href={`https://maps.google.com/?q=${res.latitude},${res.longitude}`}
              target="_blank"
            >
              <button className="bg-primary py-2 px-4 rounded-md text-white ">
                ดูเส้นทาง
              </button>
            </a>
          </div> */}

        <button className="p-2 bg-blue-500 text-white" type="submit">
          Confirms
        </button>
      </form>
    </div>
  );
}
