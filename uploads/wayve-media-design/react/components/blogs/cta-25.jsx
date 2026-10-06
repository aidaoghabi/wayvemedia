"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Let’s Build What Comes Next
        </h2>
        <p className="text-medium">
          Bring us your ambition, your challenges, and your commercial goals.
          Our senior team will help define the right way forward.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book Intro Call">Book Intro Call</Button>
          <Button title="Explore Services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
