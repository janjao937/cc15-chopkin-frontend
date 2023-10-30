export default function UserProfileButton({ children }) {
  return (
    <>
      <button className="py-3 w-full text-start hover:bg-red-300 hover:transition hover:text-white px-2 rounded-lg">
        <div className="font-semibold">{children}</div>
      </button>
    </>
  );
}
