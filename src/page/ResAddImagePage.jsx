import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { BiImageAdd } from "react-icons/bi";
import MyOutlineButton from "../components/MyOutlineButton";
import InputErrorMessage from "../features/auth/InputErrorMessage";
import Loading from "../components/Loading";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ResAddImagePage() {
  const { resId } = useParams();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getResImage, setGetResImage] = useState([]);
  const fileEl = useRef(null);

  useEffect(() => {
    const fatchResByResId = async () => {
      try {
        const res = await axios.get(`/restaurant/resById/${resId}`);
        console.log("getResImage=>", res.data);
        setGetResImage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fatchResByResId();
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (file) {
        for (let f of file) {
          formData.append("image", f);
        }
      }
      setLoading(true);
      await axios.post("/restaurant/createResImgPending", formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast.success("Your request has been submitted...");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {loading && <Loading />}
      <div className="text-4xl font-medium p-6 pl-64 pb-10">
        Add Restaurant Image
      </div>
      <div className="flex flex-col justify-center gap-3 p-3 border border-gray-500 rounded-lg shadow-md h-full">
        <div className="flex flex-col justify-center items-center gap-4 p-4 border border-gray-500 border-b-2 rounded-lg shadow-md h-[50%]">
          <div className="text-primary">Current Image...</div>
          {getResImage?.RestaurantImages?.length === 0 ? (
            <div>No restaurant images</div>
          ) : (
            <div className="grid grid-cols-5 gap-5">
              {getResImage?.RestaurantImages?.map((item, index) => (
                <div key={index}>
                  <img src={item.url} alt="res-image" className="w-32 h-32" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4 border border-gray-500 rounded-lg shadow-md h-[50%]">
          <div className="text-primary">Add new Images here...</div>
          <input
            type="file"
            multiple
            className="hidden"
            ref={fileEl}
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFile(Array.from(e.target.files));
              }
              if (e.target.files.length > 10) {
                setFile(null);
              }
            }}
          />
          {file ? (
            <div
              onClick={() => fileEl.current.click()}
              className="cursor-pointer grid grid-rows-2 grid-flow-col gap-5"
            >
              {file.map((item, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(item)}
                  alt="review-pic"
                  className="w-32 h-32"
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              <div
                className="flex justify-center items-center bg-gray-200 border border-gray-300 shadow w-40 h-40 cursor-pointer"
                onClick={() => fileEl.current.click()}
              >
                <BiImageAdd />
              </div>
              <div>
                <InputErrorMessage message="Only add 10 images" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-8">
        <MyOutlineButton
          onClick={() => {
            handleSubmit();
            setFile(null);
          }}
          outlinestyle={`outline-red-600 hover:bg-red-500 hover:text-white`}
        >
          Submit
        </MyOutlineButton>
      </div>
    </div>
  );
}
