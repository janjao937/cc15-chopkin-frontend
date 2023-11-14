import {useDispatch,useSelector} from "react-redux";
import { paying } from "../../app/slice/paymentSlice";

/*Booking ID
"28a34d2f-242f-496b-b4f4-f048caa5ad07"
"8807fd2d-535e-4a16-8ba9-cdaa555ef90d"
*/

//p={bookingId,text}
const PayButton=(p)=>{
    const {loading,error} = useSelector((state)=>state.payment);
    const dispatch = useDispatch();

    const bookingId = p?.bookingId||"8807fd2d-535e-4a16-8ba9-cdaa555ef90d";
    const text = p?.text;

    const OnClickHandeler = ()=>{
        dispatch(paying({bookingId:bookingId}));
    }


    return(
        <button onClick={OnClickHandeler} className="border px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-300">{text||"Pay" }</button>
    );
}

export default PayButton;