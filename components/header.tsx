"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { MenuIcon, MapPinIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks, siteConfig, whatsappHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div
        className={cn(
          "border-b transition-all duration-300 ease-out",
          scrolled
            ? "border-border/80 bg-background/95 supports-backdrop-filter:bg-background/80"
            : "border-transparent bg-background",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 ease-out sm:px-8",
            scrolled ? "h-16" : "h-20",
          )}
        >
          {/* Left: logo */}
          <Link
            href="/"
            className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Logo label="" />
            <span className="sr-only">Bait Clean — home</span>
          </Link>

          {/* Center: primary nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {active && (
                        <span
                          className="absolute inset-x-3 -bottom-px h-px bg-brass"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: trust cue + actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground md:inline-flex">
              <MapPinIcon className="size-3.5 text-brass" aria-hidden="true" />
              {siteConfig.serviceArea}
            </span>

            <Separator
              orientation="vertical"
              className="hidden !h-5 md:block"
            />

            <Button
              variant="ghost"
              size="icon"
              nativeButton={false}
              className="text-foreground hover:text-primary"
              render={
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Bait Clean on WhatsApp"
                />
              }
            >
              <WhatsAppIcon className="size-5" />
            </Button>

            <Button
              nativeButton={false}
              className="hidden h-10 px-5 tracking-wide sm:inline-flex"
              render={<Link href="/contact" />}
            >
              Get a Free Quote
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <MenuIcon className="size-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full gap-0 sm:max-w-sm"
              >
                <SheetHeader className="border-b p-5">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <Logo label="" />
                </SheetHeader>

                <nav aria-label="Mobile" className="flex flex-col p-3">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <SheetClose
                        key={link.href}
                        render={
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "rounded-lg px-3 py-3 font-serif text-2xl transition-colors hover:text-primary",
                              active ? "text-primary" : "text-foreground",
                            )}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t p-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPinIcon className="size-4 text-brass" aria-hidden="true" />
                    Serving {siteConfig.serviceArea}
                  </span>
                  <Button
                    nativeButton={false}
                    className="h-11 w-full tracking-wide"
                    render={<Link href="/contact" onClick={() => setOpen(false)} />}
                  >
                    Get a Free Quote
                  </Button>
                  <Button
                    variant="outline"
                    nativeButton={false}
                    className="h-11 w-full tracking-wide"
                    render={
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    <WhatsAppIcon className="size-4" data-icon="inline-start" />
                    Message on WhatsApp
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
