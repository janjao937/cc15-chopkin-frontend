import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function DropdownLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full bg-transparent text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
      >
        <span>RESTAURANT LOCATED</span>
        <HiChevronDown />
      </div>

      {isOpen && (
        <div className="flex justify-evenly mt-2">
          <input
            type="text"
            placeholder="latitude"
            className="border border-gray-600"
          />
          <input
            type="text"
            placeholder="longitude"
            className="border border-gray-600"
          />
        </div>
      )}
    </>
  );
}
