# Wizybot Chat Widget

A custom chat widget built with React, TypeScript, and Tailwind CSS, following the **Atomic Design** approach. It includes features like automated bot responses, product recommendations, and personalized user input.

## Features

- Architecture based on Atomic Design (atoms, molecules, organisms)
- Custom hook (`useChat`) to handle messages and bot logic
- Integration with external product API (`fetchProducts()`)
- Asks for the user's name before opening the chat
- Bot typing indicator
- Product display in a carousel
- Responsive design

---

## Project Structure

```bash
src/
│
├── components/
│   ├── atoms/
│   │   └── LoadingDots.tsx
│   │   └── NameInputModal.tsx  
│   ├── molecules/
│   │   ├── ChatBubble.tsx
│   │   └── MessageInput.tsx
│   │   └── ChatBotButtom.tsx
│   │   └── ProductCard.tsx
│   ├── organisms/
│       └── ChatWindow.tsx
│       └── ProductCarousel.tsx
│   
├── hooks/
│   └── useChat.ts
│
├── services/
│   └── api.ts
│
├── types/
│   ├── message.ts
│   └── product.ts
│
├── utils/
│   └── generateRandomResponse.ts
├── pages/
│   └── ChatPage.ts
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/LeonardoGomezz/prueba-tecnica-wizybot.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```env
VITE_WIZYBOT_API_URL=https://api.wizybot.com
```

4. Start the development server:

```bash
npm run dev
```

---

## Usage

### Chat Initialization

The component asks for the user's name before opening the chat window. Once provided, the chat header is personalized with the name.

### Sending Messages

Messages sent by the user are added to the state, and the bot responds after a typing animation.

### Requesting Products

Send the message:

```
I want product recommendations
```

The bot will respond with a product carousel.

---

## Technologies

- React
- TypeScript
- Tailwind CSS
- Axios
- React Icons
- UUID

---

## Bot Logic

The bot logic resides in the custom `useChat.ts` hook, which:

- Manages messages
- Shows typing animations
- Fetches products from an external API
- Generates random responses for other inputs

---

## Author

- Developed by [Leonardo Gomez](https://portafolio-leonardogomez.netlify.app/es/)
