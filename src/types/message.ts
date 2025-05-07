import type { Product } from "./product";

export interface Message {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  type?: 'text' | 'product';
  products?: Product[];
  timestamp: Date;
}


