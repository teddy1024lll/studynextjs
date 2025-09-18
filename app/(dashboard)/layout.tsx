import { Chilanka } from "next/font/google";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl">
        dashboard bar
        {props.children}
      </h1>
    </div>
  );
};

export default Layout;
