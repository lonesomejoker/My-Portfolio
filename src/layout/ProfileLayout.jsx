import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";

const ProfileLayout = () => {
  return (
    <div className=" font-poppins text-gray-200 overflow-x-clip">
      <Header />
      <Landing />
      <About/>
      <Work/>
      <Portfolio/>
      <TechStack/>
    </div>
  );
};

export default ProfileLayout;
