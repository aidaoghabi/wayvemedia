"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Layout358() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">About Wayve</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Where Performance Meets Precision
            </h2>
            <p className="text-medium">
              An international, award-winning performance marketing agency built
              around experience, commercial thinking, and profitable growth.
            </p>
          </div>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-small font-semibold">Who We Are</p>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">
                Built for Ambitious Growth
              </h3>
              <p>
                Wayve works with ambitious companies - from fast-growing
                start-ups to global enterprises - to deliver measurable growth
                across paid media, organic search, and digital strategy. We
                combine data-led decision-making, precise execution, and
                transparent collaboration to create tailored strategies that
                drive real leads, sales, and long-term business impact.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book Intro Call" variant="secondary">
                Book Intro Call
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/04de3a40-c842-40e9-f920-16acce649501/2560?exp=1787788800&sig=5e7e7e72107ae9e1f67f3f51469db77eacc77a5472425ff25934a45bd615ac97"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
