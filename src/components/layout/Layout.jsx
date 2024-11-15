import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import NestedSidebar from "../../sidebar/NestedSidebar";

const Layout = () => {
  const { isSidebarOpen } = useSelector((state) => state.cart);
  return (
    <div>
      <Header />
      <div
        className={` absolute lg:hidden top-0 z-50 h-screen w-96 bg-white duration-300 transition-all ease-in-out mt-20 ${
          isSidebarOpen ? "left-0 " : "-left-96"
        }`}
      >
        <NestedSidebar />
      </div>
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Layout;
