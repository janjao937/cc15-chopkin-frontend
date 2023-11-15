import React, { useEffect, useState } from "react";
import { ChatComponentOther, ChatComponentMe } from "./ChatBoxComponent";

const Chat =({socket,username,room})=>{
    const [inPutMessage,setInputMessage] = useState("");
    const [messageArr,setMessageArr] = useState([]);

    const OnSendMessageHandler = async()=>{
        //validate
        if(inPutMessage.trim()==="") return;
        const messageData = {
            room:room,
            author:username,
            message:inPutMessage,
            time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
        }
        await socket.emit("send_message",messageData);
        setMessageArr([...messageArr,messageData]);
        setInputMessage("");
    }

    useEffect(()=>{
        socket.on("recive_message",(data)=>{
            console.log(data);
            setMessageArr((e)=>[...e,data]);
        })
    },[socket]);
    
    return(
        <div>
            <div className="chat-header">
                <p>Realtime Chat|ROOM_ID:{room}</p>
            </div>
            <div className="chat-body">
                {
                    messageArr.map((e,index)=>{
                        return (username === e.author?(
                        <ChatComponentMe key={index} message={e.message} author={e.author} time={e.time}/>):(
                        <ChatComponentOther key={index} message={e.message} author={e.author} time={e.time}/>)
                        )
                    })
                }
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="message..." onChange={(e)=>setInputMessage(e.target.value)} value={inPutMessage}/>
                <button onClick={OnSendMessageHandler}>Send</button>
            </div>
        </div>
    )
}

export default Chat;