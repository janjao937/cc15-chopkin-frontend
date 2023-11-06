import { useRef } from "react";
import { BiImageAdd } from "react-icons/bi";

export default function AddPackageImage({ file, setFile }) {
  const fileEl = useRef(null);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      {file ? (
        <div
          className="flex justify-center items-center w-20 h-20 bg-gray-200 border border-gray-300 shadow cursor-pointer"
          onClick={() => fileEl.current.click()}
        >
          <img
            src={URL.createObjectURL(file)}
            alt="addPackage-pic"
            className="w-full h-full"
          />
        </div>
      ) : (
        <div
          className="flex justify-center items-center w-20 h-20 bg-gray-200 border border-gray-300 shadow cursor-pointer"
          onClick={() => fileEl.current.click()}
        >
          <BiImageAdd />
        </div>
      )}
    </div>
  );
}
