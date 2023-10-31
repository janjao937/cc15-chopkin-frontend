// const category = [
//   { id: 1, name: "familyRestaurant" },
//   { id: 2, name: "allYouCanEat" },
//   { id: 3, name: "izakaya" },
//   { id: 4, name: "hotelRestaurant" },
//   { id: 5, name: "chillCafe" },
//   { id: 6, name: "sportbar" },
// ];

export default function DropdownCategory() {
  return (
    <>
      <select
        id="category"
        className="w-full h-full bg-transparent text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 block focus:border-2"
      >
        <option selected>RESTAURANT TYPE</option>
        <option value="familyRestaurant">Family Restaurant</option>
        <option value="allYouCanEat">All you can eat</option>
        <option value="izakaya">Izakaya</option>
        <option value="hotelRestaurant">Hotel Restaurant</option>
        <option value="chillCafe">Chill Cafe</option>
        <option value="sportbar">Sportbar</option>
      </select>
    </>
  );
}
