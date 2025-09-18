import { Chilanka } from "next/font/google";
import React, { Children, ReactNode } from "react";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}
const Layout = (props: Readonly<Props>) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {props.children}
    </main>
  );
};

export default Layout;
