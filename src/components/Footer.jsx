import React from "react";
import { TbDeviceMobile } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className=" pt-1 pb-[1.3rem] bg-neutral-950 text-zinc-400 z-[1]">
        <div className=" grid grid-cols-3 md:grid-cols-5 container lg:gap-y-0 gap-y-12">
          <div className=" col-span-2 ">
           <section className=" h-[80%] ">
            <h1 className="  text-[1rem] lg:text-[1.2rem]  text-[#7d42bb] font-[600] mb-3">
              L O N E S O M E J O K E R
            </h1>
            <p className=" font-light text-[14px] md:text-[16px] w-[88%] lg:w-[94%]">Pariatur sint proident aliquip velit proident mollit. Reprehen ipsum nisi minim mollit enim in tempor nisi Lorem est quis incididunt in velit.</p>
            </section>
            <section className="w-fit mt-1 lg:mt-3">
              <TbDeviceMobile className=" text-[2rem] mx-auto text-[#7d42bb]" />
              <h3 className=" font-light text-[14px] md:text-[16px] lg:text-lg">
                9810113806
              </h3>
            </section>
          </div>
          <div className=" col-span-1">
            <section className=" h-[80%]">
              <h1 className=" text-[1rem] lg:text-[1.2rem]  text-[#7d42bb] font-[600] mb-3">
                Quick Links
              </h1>
              <ul className=" font-light text-[14px] md:text-[16px]">
                <li>F.A.Q</li>
                <li>Terms of Service</li>
                <li>Support</li>
                <li>My Certificates</li>
              </ul>
            </section>
            <section className=" w-fit mt-1 lg:mt-3">
              <IoIosMail className=" text-[2rem] mx-auto text-[#7d42bb]" />
              <a href="mailto:shakestha@gmail.com" className=" font-light text-[11px] md:text-[16px] lg:text-lg">
                shakestha@gmail.com
              </a>
            </section>
          </div>
          <div className="col-span-3 md:col-span-2 mx-auto md:justify-self-end md:mx-0">
            <section className=" h-[80%]">
              <h1 className=" text-[1rem] lg:text-[1.2rem] text-[#7d42bb] font-[600] mb-3">
                Want To Hire Me?
              </h1>
              <a
                href="/assets/Shirish_Resume.pdf"
                download="Shirish_Resume.pdf"
                className="font-semibold px-4 py-3 rounded-3xl bg-gradient-to-r from-violet-800 hover:translate-x-2 duration-500 inline-block"
              >
                Download CV
              </a>
            </section>
            <section className=" w-fit mt-1 lg:mt-3 mx-auto">
              <TiLocation className=" text-[2rem] mx-auto text-[#7d42bb]" />
              <h3 className=" font-light text-[14px] md:text-[16px] lg:text-lg ">
                Balambu,Kathmandu
              </h3>
            </section>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-[#484848] to-black text-center text-zinc-400">
        <section className=" container font-[500] text-sm md:text-lg lg:text-xl">
          <p>
            Copyright 2024 ©️Shirish Shrestha |{" "}
            <span className=" text-red-700">All rights Reserved</span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Footer;
