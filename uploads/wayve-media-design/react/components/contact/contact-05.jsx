"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            <div className="mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4">Contact</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Let’s Talk About Growth
              </h2>
              <p className="text-medium">
                Tell us where you want to go. We’ll show you how to get there.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex items-center gap-4">
                <Mail className="size-6 flex-none text-scheme-text" />
                <p>info@wayvemedia.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Call className="size-6 flex-none text-scheme-text" />
                <p>+971 56 716 2922</p>
              </div>
              <div className="flex items-center gap-4">
                <LocationOn className="size-6 flex-none text-scheme-text" />
                <p>Dubai, UAE & Stockholm, Sweden</p>
              </div>
            </div>
          </div>
          <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us your challenge"
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div>
              <Button title="Send">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
