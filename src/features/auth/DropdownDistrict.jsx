export const districtIndex = [
  "Bang Bon",
  "Bang Kapi",
  "Bang Khae",
  "Bang Khen",
  "Bang Kho Laem",
  "Bang Khun Thian",
  "Bang Na",
  "Bang Phlat",
  "Bang Rak",
  "Bang Sue",
  "Bangkok Noi",
  "Bangkok Yai",
  "Bueng Kum",
  "Chatuchak",
  "Chom Thong",
  "Din Daeng",
  "Don Mueang",
  "Dusit",
  "Huai Khwang",
  "Khan Na Yao",
  "Khlong Sam Wa",
  "Khlong San",
  "Khlong Toei",
  "Lak Si",
  "Lat Krabang",
  "Lat Phrao",
  "Min Buri",
  "Nong Chok",
  "Nong Khaem",
  "Pathum Wan",
  "Phasi Charoen",
  "Phaya Thai",
  "Phara Khanong",
  "Phra Nakhon",
  "Pom Prap Sattru Phai",
  "Prawet",
  "Rat Burana",
  "Ratchathewi",
  "Sai Mai",
  "Samphanthawong",
  "Saphan Sung",
  "Sathon",
  "Suan Luang",
  "Taling Chan",
  "Thawi Watthana",
  "Thon Buri",
  "Thung Khru",
  "Wang Thonglang",
  "Watthana",
  "Yan Nawa",
];

export default function DropdownDistrict({ input, setInput }) {
  return (
    <>
      <select
        name="districtIndex"
        id="districtIndex"
        className="w-full bg-transparent text-blue-gray-700 transition-all outline outline-0 border text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 focus:border-2"
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      >
        <option value="selected">DISTRICT</option>
        {districtIndex.map((item, index) => (
          <option name="districtIndex" key={index} id={item.id} value={item.id}>
            {item} {index}
          </option>
        ))}
      </select>
    </>
  );
}
