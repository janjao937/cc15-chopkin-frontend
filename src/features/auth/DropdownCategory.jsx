const categoryIndex = [
  { id: 1, name: "familyRestaurant", title: "Family Restaurant" },
  { id: 2, name: "allYouCanEat", title: "All you can eat" },
  { id: 3, name: "izakaya", title: "Izakaya" },
  { id: 4, name: "hotelRestaurant", title: "Hotel Restaurant" },
  { id: 5, name: "chillCafe", title: "Chill Cafe" },
  { id: 6, name: "sportbar", title: "Sportbar" },
];

export default function DropdownCategory({ input, setInput }) {
  return (
    <>
      <select
        name="categoryIndex"
        id="categoryIndex"
        className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: +e.target.value })
        }
      >
        <option value="selected">RESTAURANT TYPE</option>
        {categoryIndex.map((item, index) => (
          <option name="categoryIndex" key={index} id={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
}
