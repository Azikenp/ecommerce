import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "@/context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantites } = useStateContext;
  const [order, setOrder] = useState(null);

  return <div>Success</div>;
};

export default Success;
