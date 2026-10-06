"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog46() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Our Awards</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Recognised for Performance. Awarded for Results.
            </h2>
            <p className="text-medium">
              Award-winning work recognised across global and regional industry
              competitions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-5 w-full md:mb-6">
              <img
                src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/9862449a-c0e6-46be-319f-cf37ae0e8101/2560?exp=1787788800&sig=3e8e26d66e8bfb0b77fa40c9fc6bd8d5c3c108c82bb05f6df8817211c3fcc754"
                alt="Relume placeholder image"
                className="aspect-video size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Global Awards</Badge>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-h5 font-bold">
                MarCom Award Platinum Winner Highest distinction awarded by the
                MarCom Awards, selected from more than 6,500 entries across 40+
                countries.
              </h2>
            </a>
            <p>
              Recognising outstanding achievement in search engine marketing for
              Carrefour MENA.
            </p>
            <Button
              title="View Case Study"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              View Case Study
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-5 w-full md:mb-6">
              <img
                src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/f5d9bfe6-8095-4ce6-492f-ee2168a09e01/2560?exp=1787788800&sig=778baeead314d314981da08009ec7734d1aba2911e88a439360ae8a949d67886"
                alt="Relume placeholder image"
                className="aspect-video size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">International Awards</Badge>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-h5 font-bold">
                MENA Search Awards 🥇 1st Place - Best Use of Search 🥈 2nd
                Place - Best Start-Up Agency Recognised among the region's
                leading performance marketing agencies for innovation and
                measurable search performance.
              </h2>
            </a>
            <p>Celebrating search excellence and agency innovation.</p>
            <Button
              title="View Case Study"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              View Case Study
            </Button>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center md:mt-20" />
      </div>
    </section>
  );
}
