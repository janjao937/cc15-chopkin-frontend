import { useState } from "react";

export default function LiveChat() {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const handleOpenChat = () => {
    setIsOpenChat(true);
  };

  const handleCloseChat = () => {
    setIsOpenChat(false);
  };


  return (
    <button
      onClick={handleOpenChat}
      className="z-10 bottom-3 right-3 fixed  text-white"
    >
      {isOpenChat ? (
        <div className="w-[400px] h-[500px] bg-white shadow-lg rounded-3xl flex flex-col">
            <div className="bg-secondary w-full rounded-t-3xl py-3 flex px-5 justify-between h-[10%]">
                <p>Admin</p>
                <button className="bg-blue-500 px-2" onClick={handleCloseChat}>X</button>
            </div>
            <div className="h-[75%] flex flex-col">
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </div>
            <div className="h-[15%] bg-gray-200 rounded-b-3xl flex items-center px-3">
                <input type="text" className="w-full h-[60%]"/>
            </div>
        </div>
      ) : (
        <div className="w-[80px] h-[80px] px-5 py-10 rounded-full bg-secondary flex items-center justify-center">
          close
        </div>
      )}
    </button>
  );
}
