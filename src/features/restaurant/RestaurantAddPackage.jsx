import { useState } from "react";
import AddPackageDetail from "./AddPackageDetail";
import AddPackageImage from "./AddPackageImage";

const mocPackage = [
  {
    id: 1,
    name: "Package A",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 500,
    img: "https://mocoshow.com/wp-content/uploads/2020/03/348674E1-BCA1-42D6-BE32-443F33935393-scaled.jpeg",
  },
  {
    id: 2,
    name: "Package B",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 500,
    img: "https://mocoshow.com/wp-content/uploads/2020/03/348674E1-BCA1-42D6-BE32-443F33935393-scaled.jpeg",
  },
  {
    id: 3,
    name: "Package C",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 500,
    img: "https://mocoshow.com/wp-content/uploads/2020/03/348674E1-BCA1-42D6-BE32-443F33935393-scaled.jpeg",
  },
];

export default function RestaurantAddPackage() {
  const [file, setFile] = useState(null);

  const [input, setInput] = useState([
    {
      name: "",
      detail: "",
      price: "",
    },
    {
      name: "",
      detail: "",
      price: "",
    },
  ]);

  return (
    <div className="flex gap-3 p-3 border border-gray-500 rounded-lg shadow-md w-[80rem]">
      <div className="flex flex-col justify-evenly gap-3 border border-gray-500 rounded-lg shadow-md w-[50%]">
        {mocPackage.map((item, index) => (
          <div key={index} className="flex gap-3 p-4">
            <div>
              <img src={item.img} alt="package-pic" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-start justify-between">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm">{item.detail}</div>
              <div>Price : {item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-evenly border p-4 border-gray-500 rounded-lg shadow-md w-[50%]">
        <div className="flex gap-3 p-3 border-b border-gray-500">
          <AddPackageImage file={file} setFile={setFile} />
          <AddPackageDetail input={input} index={0} setInput={setInput} />
        </div>
        <div className="flex gap-3 p-3">
          <AddPackageImage file={file} setFile={setFile} />
          <AddPackageDetail input={input} index={1} setInput={setInput} />
        </div>
      </div>
    </div>
  );
}
