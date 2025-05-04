import React from "react";
import { trustUs } from "../constants/helper";
import acmeLogo from "@/public/assets/images/TrustUsLogo/acme.png";
import quantumLogo from "@/public/assets/images/TrustUsLogo/quantum.png";
import echoLogo from "@/public/assets/images/TrustUsLogo/echo.png";
import celestiaLogo from "@/public/assets/images/TrustUsLogo/celestial.png";
import pulseLogo from "@/public/assets/images/TrustUsLogo/pulse.png";
import apexLogo from "@/public/assets/images/TrustUsLogo/apex.png";
import Image from "next/image";

export default function TrustUs() {
  return (
    <section className="bg-black py-12 overflow-x-clip">
      <div className="container">
        <div className="text-center">
          <p className="text-[#7A7A7A] text-sm">
            Trusted by the world’s most innovative teams
          </p>
        </div>
        <div className="flex gap-14 flex-none mt-10">
          {/* {trustUs.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} width={160} height={30} />
          ))} */}
          <Image src={acmeLogo} alt="acmeLogo" className="h-8 w-auto" />
          <Image src={quantumLogo} alt="quantumLogo" className="h-8 w-auto" />
          <Image src={echoLogo} alt="echoLogo" className="h-8 w-auto" />
          <Image src={celestiaLogo} alt="celestiaLogo" className="h-8 w-auto" />
          <Image src={pulseLogo} alt="pulseLogo" className="h-8 w-auto" />
          <Image src={apexLogo} alt="apexLogo" className="h-8 w-auto" />
        </div>
      </div>
    </section>
  );
}
