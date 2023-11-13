import {useDispatch,useSelector} from "react-redux";
import { paying } from "../../app/slice/paymentSlice";
//p={bookingId,text}
const PayButton=(p)=>{
    const {loading,error} = useSelector((state)=>state.payment);
    const dispatch = useDispatch();

    const bookingId = p?.bookingId;
    const text = p?.text;

    const OnClickHandeler = ()=>{
        dispatch(paying({bookingId:bookingId}));
    }


    return(
        <button onClick={OnClickHandeler}>{text||"Pay"}</button>
    );
}

export default PayButton;