export default function AddPackageDetail({ input, setInput, index }) {
  const handleChangePackage = (e) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    const newInput = [...input];
    newInput[index] = { ...newInput[index], [e.target.name]: e.target.value };

    setInput(newInput);
  };

  const handleChangePrice = (e) => {
    setInput({ ...input, [e.target.name]: +e.target.value });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <label>Package Name :</label>
        <input
          type="text"
          name="name"
          value={input[index].package}
          className="border border-gray-600 rounded-md shadow-md"
          onChange={handleChangePackage}
        />
      </div>
      <div className="flex justify-between">
        <label>Detail :</label>
        <textarea
          rows="3"
          cols="25"
          name="detail"
          value={input[index].detail}
          className="border border-gray-600 rounded-md shadow-md"
          onChange={handleChangePackage}
        ></textarea>
      </div>
      <div className="flex justify-between">
        <label>Price :</label>
        <input
          type="text"
          name="price"
          value={input.price}
          className="border border-gray-600 rounded-md shadow-md"
          onChange={handleChangePrice}
        />
      </div>
    </div>
  );
}
