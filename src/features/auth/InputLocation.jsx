export default function InputLocation({
  hasError,
  isOpen,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <>
      {isOpen && (
        <div className="flex justify-evenly mt-1">
          <input
            className={`border ${
              hasError ? "border-red-500 border-2" : "border-gray-600"
            }`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      )}
    </>
  );
}
