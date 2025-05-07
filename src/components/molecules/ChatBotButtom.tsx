import { RxAvatar } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

interface ChatBotButtomProps {
  handleIsOpen: () => void;
  name: string;
}
export const ChatBotButtom = ({ name, handleIsOpen }: ChatBotButtomProps) => {
  return (
    <div
      className="p-2 bg-gradient-to-r from-[#181F41] to-[#38559A] w-[448px] rounded-lg flex justify-between items-center h-[84px]"
      onClick={handleIsOpen}
    >
      <div>
        <div className="flex gap-2 items-center">
          <RxAvatar size={40} color="#ffffff" />
          <div>
            <p className="text-white font-semibold text-sm">Chat with</p>
            <p className="text-white font-semibold text-lg">{name ?? ""}</p>
          </div>
        </div>
        <p className="text-white font-semibold text-sm flex gap-2 items-center">
          <FaCircle size={10} color="#22BB33" /> We reply inmediatly!
        </p>
      </div>
      <div className="flex gap-3 pr-2">
        <IoCartOutline className="cursor-pointer" size={24} color="#ffffff" />
        <IoIosArrowUp className="cursor-pointer" size={24} color="#ffffff" />
      </div>
    </div>
  );
};
