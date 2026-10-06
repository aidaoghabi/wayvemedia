"use client";

import React from "react";

export function Layout308() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Organic Growth</p>
            <h2 className="text-h2 font-bold">
              Organic Growth Built for Long-Term Visibility
            </h2>
          </div>
          <div>
            <p className="text-medium">
              We help businesses increase discoverability across traditional
              search engines and AI-powered platforms through Search Engine
              Optimization and Generative Engine Optimization.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/map_search.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">
              Search Visibility Across Google and AI
            </h3>
            <p>
              From improving rankings in traditional search to increasing
              visibility across AI-powered discovery platforms, we build organic
              growth strategies designed to strengthen long-term discoverability
              and demand.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/tab_search.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">
              Search Engine Optimization
            </h3>
            <p>
              Technical SEO, on-page optimisation, content strategy, keyword
              research, internal linking, and authority building to improve
              rankings, organic traffic, and conversions.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/web_stories.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">
              Generative Engine Optimization
            </h3>
            <p>
              Content and entity optimisation for ChatGPT, Gemini, Claude,
              Perplexity, and other AI-powered discovery platforms to strengthen
              brand visibility and relevance in generated answers.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/visibility.svg"
              />
            </div>
            <h3 className="mb-3 text-h5 font-bold md:mb-4">
              Content & Search Intelligence
            </h3>
            <p>
              Keyword research, search intent analysis, content planning,
              competitive insights, and ongoing performance measurement to
              identify and capture new organic growth opportunities.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
