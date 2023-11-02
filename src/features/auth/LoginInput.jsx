import { Input } from "@material-tailwind/react";

export default function LoginInput({
  type = "text",
  label,
  value,
  name,
  onChange,
  hasError,
  icon,
}) {
  return (
    <Input
      size="lg"
      className={`block w-full py-6 text-sm border
    ${hasError ? "border-2 border-red-500" : "border-blue-gray-200"}
    `}
      type={type}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      icon={icon}
    />
  );
}
