import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

// A multi-page React app with a navigation bar styled with Tailwind CSS.
// Active links should be highlighted using conditional styling with NavLink and Tailwind.
// The app should have a responsive design, and visiting an invalid route should show a custom 404 page.=
