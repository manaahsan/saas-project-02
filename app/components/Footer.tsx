import React from "react";
import Image from "next/image";
import { socialIcons } from "../constants/helper";

export default function Footer() {
  return (
    <section className="bg-black py-8 border-t">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-y-3 md:flex-row md:justify-between">
          <div className="text-[#808080]">@ 2025 Your Company, Inc. All rights reserved</div>
          <div className="flex gap-2">
            {socialIcons?.map(({ name, src }) => (
              <Image key={name} src={src} alt={name} width={24} height={24} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
