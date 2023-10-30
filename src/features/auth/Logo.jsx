export default function Logo() {
  return (
    <div className="absolute top-[-4rem] left-[35%] w-[120px] h-[120px] rounded-full border shadow-lg overflow-hidden bg-white">
      <img
        src="/src/assets/logo.png"
        alt="logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
