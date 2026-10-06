"use client";

import React from "react";

export function Layout245() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">
                Web & App Development
              </p>
              <h2 className="text-h2 font-bold">
                From Idea to High-Performing Digital Product
              </h2>
            </div>
            <div>
              <p className="text-medium">
                From conversion-focused websites to scalable web and mobile
                applications, we combine design, development, and technical
                execution to build digital products that support real business
                objectives.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/web.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Web Development
              </h3>
              <p>
                Custom websites, landing pages, e-commerce platforms, and CMS
                solutions built for speed, usability, conversion, and technical
                performance.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/apps.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                App Development
              </h3>
              <p>
                Scalable web and mobile applications designed around user needs,
                business logic, integrations, and long-term product growth.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/foundation.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                UX, Integrations & Performance
              </h3>
              <p>
                User experience, analytics, tracking, API integrations,
                automation, testing, and technical optimisation to ensure every
                product works seamlessly and performs reliably.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20" />
        </div>
      </div>
    </section>
  );
}
