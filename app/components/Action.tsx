import React from "react";
import Image from "next/image";

export default function Action() {
  return (
    <section className="bg-black py-20 overflow-x-clip md:py-36">
      <div className="container text-center">
        <div className="relative">
          <div className="mx-auto">
            <div className="text-white text-2xl font-semibold md:text-[54px] md:text-[60px]">
              Get Instant access
            </div>
            <p className="mt-5 text-[#BBBBBB] text-center md:mt-6 md:w-[430px] md:mx-auto">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="flex flex-col justify-center items-center mt-5 gap-2 md:flex-row md:mt-8">
              <input
                type="text"
                className="bg-white/20 rounded-[10px] p-2 placeholder:text-white/50 outline-none w-full md:w-auto"
                placeholder="name@gmail.com"
              />
              <button className="bg-white py-2 px-4 font-bold rounded-[10px] w-full md:w-auto">
                Get access
              </button>
            </div>
          </div>
          <div className="">
            <Image
              className="hidden absolute -top-32 -left-[85px] md:flex"
              src={"/assets/images/action/pieChart.png"}
              alt="cogWheel"
              width={225}
              height={225}
            />
            <Image
              className="hidden absolute -bottom-16 -right-24 md:flex"
              src={"/assets/images/action/cogWheel.png"}
              alt="cogWheel"
              width={225}
              height={225}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
