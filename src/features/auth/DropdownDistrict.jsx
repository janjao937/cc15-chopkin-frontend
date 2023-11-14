import { districtIndex } from "../../data/dataRes";

export default function DropdownDistrict({ input, setInput }) {
  return (
    <>
      <select
        name="districtIndex"
        id="districtIndex"
        className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: +e.target.value })
        }
      >
        <option value="selected">DISTRICT</option>
        {districtIndex.map((item, index) => (
          <option
            name="districtIndex"
            key={index}
            id={item.id}
            value={index + 1}
          >
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
