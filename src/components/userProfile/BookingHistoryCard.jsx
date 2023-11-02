import MyButton from "../MyButton";

export default function BookingHistoryCard({id,name,date,type}) {
  return (
    <>
      <div className="border border-gray-100 shadow-md rounded-2xl w-[300px] p-4 flex flex-col gap-3">
        <p className="font-semibold">{name}</p>
        <p>Booking ID: {id ? "xxxxx" : undefined}</p>
        <p>{date}</p>
        <p>{type}</p>
        <div className="flex gap-3">
          <MyButton style={`bg-secondary rounded-md hover:bg-red-400`}>Book Again</MyButton>
          <MyButton style={`bg-secondary rounded-md hover:bg-red-400`}>Detail</MyButton>
        </div>
      </div>
    </>
  );
}
