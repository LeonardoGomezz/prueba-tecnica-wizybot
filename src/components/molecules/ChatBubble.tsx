import type { Message } from "../../types/message";
import { ProductCarousel } from "../organisms/ProductCarousel";

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble = ({ message }: ChatBubbleProps) => {
  if (
    message.sender === "bot" &&
    message.type === "product" &&
    message.products
  ) {
    return <ProductCarousel products={message.products} />;
  }

  console.log("message => ", message);

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-2 m-2 rounded-lg max-w-xs ${
          message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};
