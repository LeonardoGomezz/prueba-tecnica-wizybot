import { useChat } from "../../hooks/useChat";
import { ChatBubble } from "../molecules/ChatBubble";
import { LoadingDots } from "../atoms/LoadingDots";
import { MessageInput } from "../molecules/MessageInput";
import { RxAvatar } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { NameInputModal } from "../atoms/NameInputModal";
import { useState } from "react";
import { ChatBotButtom } from "../molecules/ChatBotButtom";

export const ChatWindow = () => {
  const { messages, sendMessage, isBotTyping } = useChat();
  const [userName, setUserName] = useState("");
  const [inputName, setInputName] = useState("");
  const [isClose, setIsclose] = useState(false);

  const handleNameSubmit = () => {
    if (inputName.trim()) setUserName(inputName.trim());
  };

  if (!userName) {
    return (
      <NameInputModal
        name={inputName}
        setName={setInputName}
        onSubmit={handleNameSubmit}
      />
    );
  }

  const handleIsClose = () => {
    setIsclose(!isClose);
  };

  return (
    <>
      {isClose === true ? (
        <ChatBotButtom name={userName} handleIsOpen={handleIsClose} />
      ) : (
        <div
          className={
            "flex flex-col w-[448px] max-w-md h-[600px] bg-white rounded-lg shadow-lg"
          }
        >
          <div className="p-2 bg-gradient-to-r from-[#181F41] to-[#38559A] w-full rounded-t-lg flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center">
                <RxAvatar size={40} color="#ffffff" />
                <div>
                  <p className="text-white font-semibold text-sm">Chat with</p>
                  <p className="text-white font-semibold text-lg">
                    {userName ?? ""}
                  </p>
                </div>
              </div>
              <p className="text-white font-semibold text-sm flex gap-2 items-center">
                <FaCircle size={10} color="#22BB33" /> We reply inmediatly!
              </p>
            </div>
            <div className="flex gap-3 pr-2">
              <IoCartOutline
                className="cursor-pointer"
                size={24}
                color="#ffffff"
              />
              <IoIosArrowDown
                className="cursor-pointer"
                size={24}
                color="#ffffff"
                onClick={handleIsClose}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isBotTyping && (
              <div className="flex justify-start m-2">
                <div className="bg-gray-200 p-2 rounded-lg">
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>
          <MessageInput onSend={sendMessage} />
        </div>
      )}
    </>
  );
};
