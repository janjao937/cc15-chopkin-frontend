export default function PageName({name}) {
  return (
    <>
      <div className="mx-auto text-2xl pt-5 flex flex-col items-center gap-2">
        <div className="font-bold">{name}</div>
        <div className="bg-secondary w-[80px] h-[7px] text-center"></div>
      </div>
    </>
  );
}
