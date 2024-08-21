import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import WorkExp from "../components/WorkExp";

const ProfileLayout = () => {
  return (
    <div className=" font-poppins text-gray-200">
      <Header />
      <Landing />
      <About/>
      <WorkExp/>
    </div>
  );
};

export default ProfileLayout;
