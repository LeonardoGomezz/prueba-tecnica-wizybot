export const generateRandomResponse = (): string => {
  const responses = [
    "Sure! How can I assist you further?",
    "Let me look into that for you.",
    "Can you please elaborate?",
    "I am here to help you anytime!",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};
