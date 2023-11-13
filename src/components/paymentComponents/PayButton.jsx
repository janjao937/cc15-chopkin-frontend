

//p={bookingId,text}
const PayButton=(p)=>{
    const bookingId = p?.bookingId;
    const text = p?.text;

    const OnClickHandeler = ()=>{

    }


    return(
        <button onClick={OnClickHandeler}>{text||"Pay"}</button>
    );
}

export default PayButton;