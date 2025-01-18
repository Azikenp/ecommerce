import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuatities, setTotalQuatities] = useState();
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQuatities, qty }}
    >
      {children}
    </Context.Provider>
  );
};
