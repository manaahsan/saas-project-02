import React from "react";
import { Plus } from "lucide-react";
import { faq } from "../constants/helper";

export default function FAQ() {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_top,#4c2489,#05020A_100%)] py-24 text-center">
      <div className="container ">
        <div className="space-y-8">
          <div className="text-white text-center text-[32px] leading-[39px] font-semibold md:text-[54px] md:leading-[60px]">
            Frequently asked question
          </div>
          <div className="space-y-4 max-w-[540px] mx-auto">
            {faq.map(({ id, question, answer }) => (
              <div key={id} className="flex justify-between py-4 border-b">
                <h5 className="text-white text-lg tracking-tight">{question}</h5>
                <Plus color="white" className="font-bold" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
