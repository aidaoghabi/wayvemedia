"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout59() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="text-h2 font-bold">Performance Marketing</h2>
          </div>
          <div>
            <p className="mb-6 text-medium md:mb-8">
              Drive profitable customer acquisition through Paid Search and Paid
              Social, continuously optimised for measurable business outcomes.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/tab_search.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Paid Search</h6>
                <p>
                  Reach high-intent audiences through Google and Microsoft Ads,
                  continuously optimised to maximise profitable growth.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/person_play.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Paid Social</h6>
                <p>
                  Inspire, engage, and convert audiences across Meta, TikTok,
                  LinkedIn, Snapchat, Pinterest, and other leading social
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
