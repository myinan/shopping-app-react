import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useOutletContextData from "../hooks/useContextData";

import { useEffect } from "react";

export default function Layout() {
  const contextObj = useOutletContextData();

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <>
      <Header />
      <Outlet context={contextObj} />
      <Footer />
    </>
  );
}
