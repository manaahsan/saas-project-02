import React from "react";
import Image from "next/image";
import Cursor from "@/public/assets/images/Hero/cursor.png";
import Message from "@/public/assets/images/Hero/message.png";

export default function Hero() {
  return (
    <section
      className="py-24 bg-black relative overflow-x-clip"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #200D42 34%, #4F21A1 65%, #A46EDB 82%)",
      }}
    >
      <div className="container">
        <div className="flex justify-center items-centr w-full">
          <div className="relative">
            <h1 className="text-[54px] leading-[50px] text-white font-semibold tracking-tight text-center md:text-[154px] md:leading-[120px] md:font-semibold lg:text-[165px] lg:leading-[125px] lg:font-bold">
              One Task
              <br /> at a Time
            </h1>
            <p className="text-[22px] leading-[31px] text-white mt-5 max-w-[540px] mx-auto text-center md:mt-8">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex justify-center items-center w-full">
              <button className="bg-white py-2 px-4 font-bold rounded-[10px] mt-5">
                Get for free
              </button>
            </div>

            <Image src={Cursor} alt="cursor" className="absolute bottom-32 -left-[176px] hidden md:block"/>
            <Image src={Message} alt="cursor" className="absolute top-12 -right-[176px] hidden md:block"/>
          </div>
        </div>
      </div>
    </section>
  );
}
