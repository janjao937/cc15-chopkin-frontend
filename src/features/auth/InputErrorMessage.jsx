export default function InputErrorMessage({ message }) {
  return (
    <span className="text-red-500 text-xs font-semibold flex gap-0">
      {message}
    </span>
  );
}
