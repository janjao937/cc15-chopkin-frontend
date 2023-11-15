
const ChatComponentMe = ({message,author,time})=>{
    return(
        <div className="message">
            <div  style={{display:"flex",justifyContent:"right", gap:"4px", border:"1px solid", margin:"25px" }}>
                <p>{message}</p>
                <p style={{color:"green"}}>:{author}
                <sub style={{color:"brown"}}>{time}</sub>
                </p>
            </div>
        </div>
    )
}
const ChatComponentFriend = ({message,author,time})=>{
    return(
        <div  className="message">
            <div  style={{display:"flex",justifyContent:"left", gap:"4px", border:"1px solid", margin:"25px" }}>
                <p style={{color:"red"}} >
                    <sub style={{color:"brown"}}>{time}</sub> {author}:</p>
            <p>{message}</p>
            </div>
        </div>
    )
}


export {ChatComponentFriend};
export {ChatComponentMe};