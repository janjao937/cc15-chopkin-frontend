import { useState } from "react";
import AddPackageImage from "../../src/features/restaurant/AddPackageImage";
import MyButton from "../components/MyButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios";
import Loading from "../components/Loading";
import useRes from "../Hooks/use-res";

export default function ResEditPackagePage() {
  const { resId } = useParams();
  const newResId = String(resId);

  const { createPackagePending } = useRes();

  const [loading, setLoading] = useState(false);

  const [resPackage, setResPackage] = useState([]);

  const [file, setFile] = useState(null);

  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    restaurantId: newResId,
  });

  const handleChangePackage = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const handleChangePrice = (e) => {
  //   setInput({ ...input, [e.target.name]: +e.target.value });
  // };

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await axios.get(`/package/getAll/${newResId}`);
        console.log("package =>", res.data);
        setResPackage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPackage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      if (input) {
        formData.append("info", JSON.stringify(input));
      }
      // if (input.detail) {
      //   formData.append("detail", input.detail);
      // }
      // if (input.price) {
      //   formData.append("price", input.price);
      // }
      // if (input.restaurantId) {
      //   formData.append("restaurantId", input.restaurantId);
      // }
      setLoading(true);
      await createPackagePending(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {loading && <Loading />}
      <div className="flex gap-3 p-3 border border-gray-500 rounded-lg shadow-md w-[80rem]">
        <div className="flex flex-col justify-evenly gap-3 border border-gray-500 rounded-lg shadow-md w-[50%]">
          <div className="mt-3 p-2 text-center text-xl font-semibold bg-light-blue-100">
            Current
          </div>

          {resPackage.length > 0 &&
          resPackage.find((item) => item.status === 1) ? (
            <div>
              {resPackage.map((item, index) => (
                <div key={index} className="flex gap-3 p-4">
                  <div>
                    <img
                      src={item.img}
                      alt="package-pic"
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm">{item.detail}</div>
                    <div>Price : {item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Not information package...</div>
          )}
        </div>

        <div className="flex flex-col justify-evenly gap-3 border border-gray-500 rounded-lg shadow-md w-[50%]">
          <div className="mt-3 p-2 text-center text-xl font-semibold bg-light-blue-100">
            Update
          </div>
          <div className="flex gap-3 p-3 border-b border-gray-500">
            <AddPackageImage file={file} setFile={setFile} />
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <label>Package Name :</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    className="border border-gray-600 rounded-md shadow-md"
                    // onChange={handleChangePackage}
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between">
                  <label>Detail :</label>
                  <textarea
                    rows="3"
                    cols="25"
                    name="detail"
                    value={input.detail}
                    className="border border-gray-600 rounded-md shadow-md"
                    onChange={handleChangePackage}
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <label>Price :</label>
                  <input
                    type="number"
                    name="price"
                    value={input.price}
                    className="border border-gray-600 rounded-md shadow-md"
                    // onChange={handleChangePrice}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: +e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            {/* <AddPackageDetail input={input} index={0} setInput={setInput} onChange={handleChangePackage} /> */}
          </div>
        </div>
      </div>
      <div>
        <MyButton
          type={"submit"}
          style={`py-2 bg-secondary`}
          onClick={handleSubmit}
        >
          Submit
        </MyButton>
      </div>
    </div>
  );
}
