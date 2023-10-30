export default function UserProfileInfo({text,value}) {
  return (
    <>
      <div className="w-[50%] md:mx-0 xs:mx-auto">
        <div className="flex">
          <p className="flex-1">{text}</p>
          <p className="flex-1">{value}</p>
        </div>
      </div>
    </>
  );
}
