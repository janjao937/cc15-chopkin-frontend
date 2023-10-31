import { Input } from "@material-tailwind/react";

export default function LoginInput({
  type = "text",
  label,
  value,
  name,
  onChange,
  hasError,
}) {
  return (
    <Input
      size="lg"
      className={`block w-full border text-sm
    ${hasError && "border-red-500 "}
    `}
      type={type}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
