"use client";

import React from "react";

export function Layout253() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Our Advantage</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Why Wayve</h2>
            <p className="text-medium">
              Performance marketing has become increasingly automated. Our
              advantage lies in knowing when to follow the platforms - and when
              to challenge them.
            </p>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cognition.svg"
                />
              </div>
              <h1 className="mb-5 text-h4 font-bold md:mb-6">
                Insider Platform Expertise
              </h1>
              <p>
                Nearly 20 years combined experience at Google, working with
                global brands, enabling us to distinguish platform
                recommendations from what truly drives business growth
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/beenhere.svg"
                />
              </div>
              <h1 className="mb-5 text-h4 font-bold md:mb-6">
                Senior-Only Teams
              </h1>
              <p>
                Every account is led and executed by senior specialists, each
                with 10+ years of experience in their respective field.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/attach_money.svg"
                />
              </div>
              <h1 className="mb-5 text-h4 font-bold md:mb-6">
                Profit-First Performance Model
              </h1>
              <p>
                We optimise for profit, not vanity metrics, using our own
                award-winning advanced profit calculation framework instead of
                relying on ROAS alone.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/stacks.svg"
                />
              </div>
              <h1 className="mb-5 text-h4 font-bold md:mb-6">
                Full-Stack Delivery
              </h1>
              <p>
                Paid media, SEO, and development under one roof, ensuring
                strategy, execution, and technology work seamlessly together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
