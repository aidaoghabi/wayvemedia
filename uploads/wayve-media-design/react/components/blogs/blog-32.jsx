"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const useRelume = ({ defaultValue, selects }) => {
  const [activeSelect, setActiveSelect] = useState(defaultValue);
  const currentSelect = selects.find(function (select) {
    return select.value === activeSelect;
  });
  return { activeSelect, setActiveSelect, currentSelect };
};

export function Blog32() {
  const useActive = useRelume({
    defaultValue: "all-posts",
    selects: [
      {
        value: "all-posts",
        trigger: "All Posts",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
        ],
      },
      {
        value: "category-one",
        trigger: "Category one",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
        ],
      },
      {
        value: "category-two",
        trigger: "Category two",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
        ],
      },
      {
        value: "category-three",
        trigger: "Category three",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
        ],
      },
      {
        value: "category-four",
        trigger: "Category four",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            button: {
              title: "Read more",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          },
        ],
      },
    ],
  });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container flex max-w-lg flex-col">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              The Precision Playbook
            </h1>
            <p className="text-medium">
              Latest news, practical insights, proven strategies, and industry
              perspectives for smarter digital growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="mb-10">
            <Select
              defaultValue="all-posts"
              value={useActive.activeSelect}
              onValueChange={useActive.setActiveSelect}
            >
              <SelectTrigger className="min-w-[12.5rem] px-4 py-2 md:w-auto">
                All posts
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-posts">All posts</SelectItem>
                <SelectItem value="category-one">Paid search</SelectItem>
                <SelectItem value="category-two">Paid social</SelectItem>
                <SelectItem value="category-three">Analytics</SelectItem>
                <SelectItem value="category-four">Strategy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/5caf2f10-b946-4d6d-cd3d-5af46cd4aa01/2560?exp=1787788800&sig=e689cd28f637df93a4a669640e2072d786979602633cf14172372c5c42f70f2b"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Paid Search</Badge>
                      <p className="inline text-small font-semibold">
                        4 min read
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        Wayve Media Agency Wins at the MENA Search Awards
                      </h3>
                    </a>
                    <p>
                      Following a MarCom Platinum Victory, Wayve Media Continues
                      to Redefine Performance Marketing Excellence in the MENA
                      Region
                    </p>
                    <Button
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                      variant="link"
                      size="link"
                    >
                      Read more
                      <ChevronRight className="text-scheme-text" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/65c3a778-1bdc-4546-9667-7d998da27701/2560?exp=1787788800&sig=0640241a2f62bf6283f4a214208fae604941177526d48caffcdd0bed03b3c33a"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Paid Search</Badge>
                      <p className="inline text-small font-semibold">
                        6 min read
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        Wayve Media Wins MarCom Platinum Award for Search Engine
                        Marketing with Carrefour MENA
                      </h3>
                    </a>
                    <p>
                      Wayve Media Agency has been awarded the Platinum Award at
                      the MarCom Awards 2025 for outstanding work in Search
                      Engine Marketing with Carrefour MENA – one of the region's
                      largest and most influential retail brands.
                    </p>
                    <Button
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                      variant="link"
                      size="link"
                    >
                      Read more
                      <ChevronRight className="text-scheme-text" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/f0a9afb9-7abf-44e4-84b2-b365176eae01/2560?exp=1787788800&sig=c196d6607d928d876eef2c8998c29485be20fce3f72808d51636e9e4b2e85818"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Paid search</Badge>
                      <p className="inline text-small font-semibold">
                        5 min read
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        Wayve Media Named Finalists in Two Categories at the
                        MENA Search Awards 2025
                      </h3>
                    </a>
                    <p>
                      We're proud to share some exciting news – Wayve Media has
                      been shortlisted as a finalist in two prestigious
                      categories at the 2025 MENA Search Awards!
                    </p>
                    <Button
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                      variant="link"
                      size="link"
                    >
                      Read more
                      <ChevronRight className="text-scheme-text" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
