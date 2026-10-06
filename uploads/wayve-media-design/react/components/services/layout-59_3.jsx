"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout59_3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="text-h2 font-bold">Business Consulting</h2>
          </div>
          <div>
            <p className="mb-6 text-medium md:mb-8">
              Strengthen your digital capabilities through Digital Maturity
              Assessment and Strategic Consulting, aligning strategy,
              technology, and execution with your business goals.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/compare.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Digital Maturity Assessment
                </h6>
                <p>
                  Evaluate your digital capabilities, processes, technology, and
                  measurement to identify gaps and prioritise the next
                  opportunities for growth.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/stack.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Strategic Consulting
                </h6>
                <p>
                  Translate complex business challenges into clear, actionable
                  strategies that improve performance and enable sustainable
                  growth.
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
