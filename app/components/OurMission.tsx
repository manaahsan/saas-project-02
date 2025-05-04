import React from "react";
import Image from "next/image";
import { missions } from "../constants/helper";
import Leaf from "@/public/assets/images/Mission/leaf.png";

export default function OurMission() {
  const Card = ({ title, description }: any) => (
    <div className="border border-white/20 py-6 px-4 rounded-[10px] shadow">
      <div className="bg-white p-4 inline-flex mx-auto rounded-[10px]">
        <div className="">
          <Image src={Leaf} alt="leaf" className="" />
        </div>
      </div>

      <div className="mt-5">
        <h5 className="text-lg text-white">{title}</h5>
        <p className="text-base leading-[23px] text-white tracking-normal mt-1.5">
          {description}
        </p>
      </div>
    </div>
  );
  return (
    <section className="bg-black py-24 overflow-x-clip">
      <div className="container">
        <div className="text-center ">
          <div className="max-w-[540px] mx-auto">
            <h1 className="text-[32px] text-white font-semibold md:text-[54px]">
              Everything you need
            </h1>
            <p className="text-[22px] text-white tracking-tight leading-[31px] mt-5 ">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 md:w-[360px] mx-auto lg:w-auto lg:grid-cols-3">
            {missions?.map(({ title, description }, index) => (
              <Card key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
