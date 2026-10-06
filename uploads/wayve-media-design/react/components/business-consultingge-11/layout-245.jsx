"use client";

import React from "react";

export function Layout245() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Business Consulting</p>
              <h2 className="text-h2 font-bold">
                From Market Opportunity to Digital Transformation
              </h2>
            </div>
            <div>
              <p className="text-medium">
                Whether entering a new market or improving an existing digital
                operation, we combine market intelligence, digital maturity
                expertise, and strategic consulting to help businesses make
                informed decisions and turn them into action.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language_international.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Market Evaluation & Expansion
              </h3>
              <p>
                Market insights, localisation, payment solutions, competitive
                analysis, and demand assessment to evaluate new opportunities
                and support successful international expansion.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/analytics.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Digital Maturity Assessment
              </h3>
              <p>
                Assess strategy, technology, measurement, processes, and
                organisational capabilities to identify gaps, benchmark digital
                maturity, and prioritise the biggest opportunities for
                improvement.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/strategy.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Strategic Consulting
              </h3>
              <p>
                Turn complex business challenges into clear strategies,
                prioritised roadmaps, and actionable recommendations across
                growth, marketing, technology, and digital transformation.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20" />
        </div>
      </div>
    </section>
  );
}
