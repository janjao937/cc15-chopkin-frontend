export default function InputErrorMessage({ message }) {
  return (
    <span className="text-red-500 text-xs font-semibold flex gap-1">
      {message}
    </span>
  );
}
