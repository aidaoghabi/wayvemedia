"use client";

import React from "react";
import { InstagramLogo, LinkedinLogo } from "relume-icons";

export function Footer3() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-1 alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold">Locations</p>
              <p className="text-small mb-5 md:mb-6">
                Dubai, United Arab Emirates & Stockholm, Sweden
              </p>
              <p className="text-small mb-1 font-semibold">Contact</p>
              <a
                href="tel:1800 123 4567"
                className="text-small block underline"
              >
                info@wayvemedia.com
              </a>
              <a
                href="mailto:email@example.com"
                className="text-small block underline"
              >
                +971 56 716 2922
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <InstagramLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">Contact us</a>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">Services</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">About</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Blogs</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Contact</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Book Intro Call</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">
            © 2026 Wayve Media. All rights reserved.
          </p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
