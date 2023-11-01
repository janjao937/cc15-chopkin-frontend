const nationIndex = [
  { id: 1, name: "international", title: "International" },
  { id: 2, name: "thai", title: "Thai" },
  { id: 3, name: "japanese", title: "Japanese" },
  { id: 4, name: "chinese", title: "Chinese" },
  { id: 5, name: "italian", title: "Italain" },
];

export default function DropdownNation({ input, setInput }) {
  return (
    <>
      <select
        name="nationIndex"
        id="nationIndex"
        className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      >
        <option value="select">CUISINE NATIONALITY</option>
        {nationIndex.map((item, index) => (
          <option name="nationIndex" key={index} id={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
}
