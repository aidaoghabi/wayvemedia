"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

const ConditionalCard = () => {
  const Component = ({ children, ...props }) => {
    const isMobile = useMediaQuery("(max-width: 991px)");
    const MotionCard = isMobile ? motion.nav : motion.create(Card);
    return React.createElement(MotionCard, props, children);
  };
  return Component;
};

export function Navbar1() {
  const ConditionalRenderedCard = ConditionalCard();
  const useActive = useRelume();
  return (
    <section className="z-[999] flex w-full items-center bg-scheme-background lg:min-h-18 lg:px-[5%] scheme-1 alternate logo-alt">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, auto)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:overflow-visible lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <p
              role="button"
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-base lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              Services
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </p>
            <AnimatePresence>
              <ConditionalRenderedCard
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="lg:absolute lg:z-50 lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Paid Search
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Paid Social
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Search Engine Optimization
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Generative Engine Optimization
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  App Development
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Digital Maturity
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Business Consulting
                </a>
              </ConditionalRenderedCard>
            </AnimatePresence>
          </div>
          <a
            href="#"
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            About
          </a>
          <a
            href="#"
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Blogs
          </a>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <p
              role="button"
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-base lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              Contact
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </p>
            <AnimatePresence>
              <ConditionalRenderedCard
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="lg:absolute lg:z-50 lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Insights
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Strategy
                </a>
              </ConditionalRenderedCard>
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <p
              role="button"
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-base lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              Services
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </p>
            <AnimatePresence>
              <ConditionalRenderedCard
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="lg:absolute lg:z-50 lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Performance Marketing
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Strategy & Consulting
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-base lg:px-4 lg:py-2"
                >
                  Case Studies
                </a>
              </ConditionalRenderedCard>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <Button
              title="Contact"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              Contact
            </Button>
            <Button title="Book" size="sm" className="w-full">
              Book
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
