import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill, BsCheckFill } from "react-icons/bs";

import { useStateContext } from "@/context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          {" "}
          IF you have any questions, please email{" "}
          <a className="email" href="mailto:azikenp@gmail.com">
            azikenp@gmail.com
          </a>
        </p>

        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
