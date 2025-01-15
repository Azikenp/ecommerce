import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Aziken's Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        EMPTY
      </main>
    </div>
  );
};

export default Layout;
