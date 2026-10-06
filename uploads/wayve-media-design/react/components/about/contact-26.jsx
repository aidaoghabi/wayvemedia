"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Contact26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Global Presence</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Where Europe and the Middle East Connect
          </h2>
          <p className="text-medium">
            Two international hubs connecting regional insight with global
            performance expertise.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mx-auto mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="aspect-3/2 size-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">MENA HQ</h3>
            <p className="text-center">Dubai, United Arab Emirates</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Book Intro Call"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Book Intro Call
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mx-auto mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="aspect-3/2 size-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">European HQ</h3>
            <p className="text-center">Stockholm, Sweden</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Book Intro Call"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Book Intro Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
