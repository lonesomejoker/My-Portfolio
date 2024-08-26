import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

const ProfileLayout = () => {
  return (
    <div className=" font-poppins text-violet-700 overflow-x-clip">
      <Header />
      <Landing />
      <About/>
      <Work/>
      <Portfolio/>
      <TechStack/>
      <Footer/>
    </div>
  );
};

export default ProfileLayout;
