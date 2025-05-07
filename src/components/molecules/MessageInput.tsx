import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

interface MessageInputProps {
  onSend: (content: string) => void;
}

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="flex p-2 border-t">
      <input
        className="flex-1 p-2 outline-none border-none focus:ring-0 focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Write a Message..."
      />
      <button
        className="p-3 bg-[#1E1E50] text-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleSend}
      >
        <BsSend size={20} color="#ffffff" />
      </button>
    </div>
  );
};
