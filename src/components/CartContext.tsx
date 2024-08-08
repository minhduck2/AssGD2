// src/context/CartContext.js
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu cho product
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // Thêm các thuộc tính khác của sản phẩm nếu cần
}

// Định nghĩa kiểu cho context
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  getCartCount: () => number;
}

// Tạo context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const getCartCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
