import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BsBook, BsPersonCircle, BsTelephone } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import MyButton from "../../components/MyButton";

export default function NewBookingList({
  bookingId,
  orderStatus,
  customerFirstName,
  customerLastName,
  email,
  phone,
  date,
  time,
  totalCustomer,
  totalKid,
  packageName,
  specialRequest,
  changeBookingStatusApprove,
  changeBookingStatusReject,
}) {
  const handleApprove = () => {
    changeBookingStatusApprove(bookingId);
  };

  const handleReject = () => {
    changeBookingStatusReject(bookingId);
  };

  return (
    <>
      {orderStatus === 0 && (
        <div className="flex flex-col gap-6 mb-4">
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <BsPersonCircle size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">
              Customer Name
            </div>
            <div className="col-span-5">
              {customerFirstName} {customerLastName}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <AiOutlineMail size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">Email</div>
            <div className="col-span-5">{email}</div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <BsTelephone size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">Phone</div>
            <div className="col-span-5">{phone}</div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <BiCalendar size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">
              Date & Time
            </div>
            <div className="col-span-5">
              {date} at {time}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <FaPeopleGroup size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">
              Number of people
            </div>
            <div className="col-span-2">{totalCustomer} adults</div>
            <div className="col-span-2">{totalKid} kids</div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <BsBook size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">
              Package Type
            </div>
            <div className="col-span-5">{packageName}</div>
          </div>
          <div className="grid grid-cols-12 gap-14 ">
            <div className="col-span-2 flex items-center justify-end text-red-500">
              <AiOutlineMessage size={20} />
            </div>
            <div className="col-span-5 text-red-500 font-semibold">
              Special Request
            </div>
            <div className="col-span-5">
              {specialRequest ? specialRequest : `-`}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 my-4">
            <>
              <MyButton
                style={`bg-green-500 hover:bg-green-400 px-6 rounded-full`}
                onClick={handleApprove}
              >
                Approve
              </MyButton>
              <MyButton
                style={`bg-red-500 hover:bg-red-400 px-8 rounded-full`}
                onClick={handleReject}
              >
                Reject
              </MyButton>
            </>
          </div>
          <hr />
        </div>
      )}
    </>
  );
}
