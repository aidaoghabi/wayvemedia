"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout59_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="text-h2 font-bold">Organic Growth</h2>
          </div>
          <div>
            <p className="mb-6 text-medium md:mb-8">
              Build long-term visibility across traditional search engines and
              AI-powered discovery platforms through Search Engine Optimization
              (SEO) and Generative Engine Optimization (GEO).
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/search.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Search Engine Optimization
                </h6>
                <p>
                  Improve rankings, organic traffic, and conversions through
                  technical SEO, content optimisation, and data-led search
                  strategies.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/info.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Generative Engine Optimization
                </h6>
                <p>
                  Increase brand visibility across ChatGPT, Gemini, Claude,
                  Perplexity, and other AI-powered search and discovery
                  platforms.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book Intro Call" variant="secondary">
                Book Intro Call
              </Button>
              <Button
                title="Explore Service"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Explore Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
