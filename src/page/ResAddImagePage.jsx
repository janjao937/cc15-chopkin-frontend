import { useState, useRef } from "react";
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
  //   const [getResImage, setGetResImage] = useState([]);
  const fileEl = useRef(null);

  //   useEffect(() => {
  //     const fatchResByResId = async () => {
  //       try {
  //         const res = await axios.get(`/restaurant/resById/${resId}`);
  //         console.log("fatchResId=>", res.data);
  //         setGetResImage(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fatchResByResId();
  //   }, []);

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
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      {loading && <Loading />}
      <div className="text-4xl font-medium p-6 pl-64 pb-10">
        Add Restaurant Image
      </div>

      <div className="flex flex-col justify-center gap-3 p-3 border border-gray-500 rounded-lg shadow-md h-full">
        <div className="border border-gray-500 border-b-2 rounded-lg shadow-md h-[50%]">
          Current Image...
        </div>
        {/* <div>
          {getResImage.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt="res-image" />
            </div>
          ))}
        </div> */}
        <div className="flex flex-col justify-center items-center border border-gray-500 rounded-lg shadow-md h-[50%]">
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
              className="cursor-pointer grid grid-flow-col gap-5"
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
            <div className="flex flex-col justify-center items-center gap-3">
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
