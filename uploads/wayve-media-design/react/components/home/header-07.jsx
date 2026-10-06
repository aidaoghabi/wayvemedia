"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header7() {
  return (
    <section className="relative px-[5%] scheme-1 alternate logo-alt">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
              Scale Your Business with Performance Marketing
            </h1>
            <p className="text-medium text-white">
              Wayve Media is an award-winning performance marketing agency based
              in Dubai and Stockholm. We combine paid media with SEO,
              development, and strategic consulting to deliver measurable,
              profitable growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Book Intro Call" variant="alternate">
                Book Intro Call
              </Button>
              <Button title="Explore Services" variant="secondary-alt">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
