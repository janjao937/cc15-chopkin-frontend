import { useDispatch, useSelector } from "react-redux";
import { paying } from "../../app/slice/paymentSlice";

/*Booking ID
"28a34d2f-242f-496b-b4f4-f048caa5ad07"
"8807fd2d-535e-4a16-8ba9-cdaa555ef90d"
*/

//p={bookingId,text}
const PayButton = (p) => {
  const { loading, error } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const bookingId = p?.bookingId || "8807fd2d-535e-4a16-8ba9-cdaa555ef90d";
  const text = p?.text;

  const OnClickHandeler = () => {
    dispatch(paying({ bookingId: bookingId }));
  };

  return (
    <button
      onClick={OnClickHandeler}
      className="px-4 py-2 bg-blue-700 text-white cursor-pointer hover:bg-blue-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-full"
    >
      {text || "Payment"}
    </button>
  );
};

export default PayButton;
