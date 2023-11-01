export default function Logo() {
  return (
    <div className="w-[120px] h-[120px] rounded-full border shadow-lg overflow-hidden bg-white">
      <img
        src="/src/assets/logo.png"
        alt="logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
