import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";

const ProfileLayout = () => {
  return (
    <div className=" font-poppins text-gray-200">
      <Header />
      <Landing />
      <About/>
    </div>
  );
};

export default ProfileLayout;
