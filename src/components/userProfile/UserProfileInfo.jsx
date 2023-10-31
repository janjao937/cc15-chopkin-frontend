export default function UserProfileInfo({icon,text,value}) {
  return (
    <>
      <div className="w-[70%] md:mx-0 xs:mx-auto">
        <div className="flex">
          <div className="flex flex-1 gap-2">
          <p>{icon}</p>
          <p className="text-primary font-semibold">{text}</p>
          </div>
          <p className="flex-1">{value}</p>
        </div>
      </div>
    </>
  );
}
