"use client";

import React from "react";

export function Layout308() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Performance Marketing</p>
            <h2 className="text-h2 font-bold">
              Full-Funnel Performance Across Search and Social
            </h2>
          </div>
          <div>
            <p className="text-medium">
              From capturing high-intent demand to creating new demand and
              scaling what works, we manage performance across leading search
              and social platforms with a clear focus on profitable growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/search.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">Paid Search</h3>
            <p>
              Google Ads and Microsoft Advertising across Search Ads, Shopping
              Ads, Display Ads, and Video Ads.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/campaign.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">Paid Social</h3>
            <p>
              Full-funnel Paid Social across Meta, TikTok, LinkedIn, Snapchat,
              and Pinterest, combining creative, audience data, and continuous
              optimisation to drive growth.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/engineering.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">
              Latest Technology
            </h3>
            <p>
              We use the latest cutting-edge technology to maximise your
              campaigns results and reduce working hours from your team. Our
              custom solutions and algorithms are available for all of our
              clients, making sure we bring you measurable results every step of
              the way.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/analytics.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">Measurement</h3>
            <p>
              Our tagging and tracking solutions are designed to give you
              complete visibility into your digital marketing efforts. We can
              help you track user behaviour across different channels, analyse
              the effectiveness of your marketing campaigns and provide you with
              detailed analytics to help you optimise your strategy.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
