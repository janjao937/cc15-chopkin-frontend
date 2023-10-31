export default function DropdownNation() {
  return (
    <>
      <select
        id="nation"
        className="w-full h-full bg-transparent text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 block focus:border-2"
      >
        <option selected>CUISINE NATIONALITY</option>
        <option value="international">International</option>
        <option value="thai">Thai</option>
        <option value="japanese">Japanese</option>
        <option value="Chinese">Chinese</option>
        <option value="italian">Italain</option>
      </select>
    </>
  );
}
