import { ChatWindow } from "../components/organisms/ChatWindow";
import { RiRobot2Line } from "react-icons/ri";

function ChatPage() {
  return (
    <div className="h-screen w-full bg-gray-100 relative">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-semibold text-center pt-8">
          Wizybot-chat
        </h1>
        <RiRobot2Line size={150} />
      </div>
      <div className="flex justify-center items-end px-4 sm:px-0 sm:absolute sm:right-8 bottom-8">
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;
