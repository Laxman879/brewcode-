import React, { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactNode;
  isHome?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main className={isHome ? "homepage" : ""}>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
