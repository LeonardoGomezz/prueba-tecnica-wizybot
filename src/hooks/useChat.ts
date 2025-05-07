import { useState } from "react";
import { fetchProducts } from "../services/api";
import { v4 as uuidv4 } from "uuid";
import type { Message } from "../types/message";
import { generateRandomResponse } from "../utils/generateRandomResponse";

/**
 * Custom hook for managing chat messages and bot interactions.
 */
export const useChat = () => {
  // Initial bot greeting message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      sender: "bot",
      content: "Hello! Need any help?",
      type: "text",
      timestamp: new Date(),
    },
  ]);

  // Indicates whether the bot is "typing"
  const [isBotTyping, setIsBotTyping] = useState(false);

  /**
   * Handles sending a new user message and simulates bot response.
   * @param content - The text content of the user message
   */
  const sendMessage = async (content: string) => {
    // Create user message object
    const userMessage: Message = {
      id: uuidv4(),
      sender: "user",
      content,
      type: "text",
      timestamp: new Date(),
    };

    // Add user message to the chat
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot typing
    setIsBotTyping(true);

    setTimeout(async () => {
      let botResponse: Message;

      // Handle product recommendation request
      if (content.toLowerCase() === "i want product recommendations") {
        const products = await fetchProducts();

        if (!Array.isArray(products) || products.length === 0) {
          // Handle empty or invalid product response
          console.error("Error: products is not an array or is empty", products);
          botResponse = {
            id: uuidv4(),
            sender: "bot",
            content: "Sorry, we couldn’t find any product recommendations at the moment.",
            type: "text",
            timestamp: new Date(),
          };
        } else {
          // Select a random subset of products (up to 3)
          const randomProducts = products
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          botResponse = {
            id: uuidv4(),
            sender: "bot",
            content: "Here are some product recommendations!",
            type: "product",
            products: randomProducts,
            timestamp: new Date(),
          };
        }
      } else {
        // Generate a generic bot response for other inputs
        const randomText = generateRandomResponse();
        botResponse = {
          id: uuidv4(),
          sender: "bot",
          content: randomText,
          type: "text",
          timestamp: new Date(),
        };
      }

      // Stop typing indicator and add bot response
      setIsBotTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 3000); // Simulated delay for more natural response
  };

  // Return values for use in the chat UI
  return { messages, sendMessage, isBotTyping };
};
