import { useState } from "react";
import { useRef } from "react";
import useAuth from "../Hooks/use-auth";
import DropdownCategory from "../features/auth/DropdownCategory";
import DropdownNation from "../features/auth/DropdownNation";
import DropdownDistrict from "../features/auth/DropdownDistrict";
import profileImage from "../assets/logo.png";
import axios from "../config/axios";
import useRes from "../Hooks/use-res";
import { allDistricts } from "../data/dataRes";

export default function EditResInfo({ handleOnSubmit }) {
  const { business } = useRes();
  // console.log(business);


  console.log(allDistricts);

  const fileEl = useRef(null);
  const [input, setInput] = useState({
    restaurantName: "",
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    password: "",
    phone: "",
    districtIndex: "",
    categoryIndex: "",
    nationIndex: "",
    latitude: "",
    longitude: "",
    price: 0,
    businessTime: business,
  });

  // const districtIndex = [
  //   "Bang Bon",
  //   "Bang Kapi",
  //   "Bang Khae",
  //   "Bang Khen",
  //   "Bang Kho Laem",
  //   "Bang Khun Thian",
  //   "Bang Na",
  //   "Bang Phlat",
  //   "Bang Rak",
  //   "Bang Sue",
  //   "Bangkok Noi",
  //   "Bangkok Yai",
  //   "Bueng Kum",
  //   "Chatuchak",
  //   "Chom Thong",
  //   "Din Daeng",
  //   "Don Mueang",
  //   "Dusit",
  //   "Huai Khwang",
  //   "Khan Na Yao",
  //   "Khlong Sam Wa",
  //   "Khlong San",
  //   "Khlong Toei",
  //   "Lak Si",
  //   "Lat Krabang",
  //   "Lat Phrao",
  //   "Min Buri",
  //   "Nong Chok",
  //   "Nong Khaem",
  //   "Pathum Wan",
  //   "Phasi Charoen",
  //   "Phaya Thai",
  //   "Phara Khanong",
  //   "Phra Nakhon",
  //   "Pom Prap Sattru Phai",
  //   "Prawet",
  //   "Rat Burana",
  //   "Ratchathewi",
  //   "Sai Mai",
  //   "Samphanthawong",
  //   "Saphan Sung",
  //   "Sathon",
  //   "Suan Luang",
  //   "Taling Chan",
  //   "Thawi Watthana",
  //   "Thon Buri",
  //   "Thung Khru",
  //   "Wang Thonglang",
  //   "Watthana",
  //   "Yan Nawa",
  // ];

  const [file, setFile] = useState(null);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
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
    if (input.latitude) {
      formdata.append("latitude", input.latitude);
    }
    if (input.longitude) {
      formdata.append("longitude", input.longitude);
    }
    if (input.businessTime) {
      formdata.append("businessTime", JSON.stringify(input.businessTime));
    }

    handleOnSubmit();

    axios
      .post(`http://localhost:8888/restaurant/edit`, formdata)
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
        <p>district</p>
        <div>
          <select
            name="districtIndex"
            id="districtIndex"
            className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
            onChange={(e) =>{
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            }
          >
            <option value="selected">DISTRICT</option>
            {allDistricts.map((item, index) => {
              return <option
                name="districtIndex"
                key={index}
                id={item.id}
                value={index + 1}
              >
                {item}
              </option>;
            })}
          </select>
        </div>
        {/* <div>
          <DropdownDistrict input={input} setInput={setInput} />
          {error.districtIndex && (
            <InputErrorMessage message={error.districtIndex} />
          )}
        </div> */}
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
