import React from "react";
import Image from "next/image";
import ShowCase from "@/public/assets/images/productShowCase/showcase.png";

export default function ProductShowCase() {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom,#4c2489,#05020A_100%)] py-24">
      <div className="container">
        <div className="text-center max-w-[540px] mx-auto">
          <h5 className="text-[32px] text-white font-semibold md:text-[54px] md:leading-[60px]">
            Intuitive interface
          </h5>
          <p className="mt-5 text-[22px] text-white leading-[31px] tracking-tight">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image className="mt-5 w-full h-auto object-cover" src={ShowCase} alt="productShowcase" />
      </div>
    </section>
  );
}
