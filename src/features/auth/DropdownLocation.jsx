import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import InputLocation from "./InputLocation";
import InputErrorMessage from "./InputErrorMessage";
import Modal from "../../components/Modal";
import MapComponent from "../googleMaps/MapComponent";
import useRes from "../../Hooks/use-res";

export default function DropdownLocation({ error,onLocationChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const { input, setInput, selected } = useRes();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: +e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, position: selected };
    });
    setIsOpen(false);
    onLocationChange(selected);
  };


  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between w-full bg-transparent text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-3 rounded-md cursor-pointer ${
          isOpen ? "border-2 border-gray-900" : "border-blue-gray-200"
        }`}
      >
        <span>RESTAURANT LOCATED</span>
        <HiChevronDown />
      </div>

      <div>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          maxWidth={60}
          title={`SEARCH LOCATION`}
        >
          <div className="flex items-center flex-col gap-5">
            <MapComponent />
            <button
              className="bg-primary text-white w-[25rem] py-2 rounded-sm"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </Modal>
        {/* <InputLocation
					isOpen={isOpen}
					value={input.latitude}
					placeholder="Latitude"
					onChange={handleChangeInput}
					name="latitude"
					hasError={error.latitude}
				/>
				{error.latitude && (
					<InputErrorMessage message={error.latitude} />
				)}
			</div>

			<div>
				<InputLocation
					isOpen={isOpen}
					value={input.longitude}
					placeholder="Longitude"
					onChange={handleChangeInput}
					name="longitude"
					hasError={error.longitude}
				/>
				{error.longitude && (
					<InputErrorMessage message={error.longitude} />
				)} */}
      </div>
    </>
  );
}
