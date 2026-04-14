"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "site-bg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Absolute Header-Level Theme Toggle (Pinned to exact screen edge) */}
      <div className="absolute right-4 md:right-8 top-0 h-full flex items-center z-50">
        <ThemeToggle />
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-0 group cursor-pointer" id="nav-logo">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-text-primary">
                inriser
              </span>
              <span className="text-xl sm:text-2xl font-medium text-accent group-hover:scale-125 transition-transform duration-200">
                .
              </span>
            </Link>
          </div>

          {/* Desktop Nav (Center) — visible at lg and above */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-text-secondary cursor-pointer",
                  "hover:text-primary transition-colors duration-200",
                  "relative after:absolute after:bottom-0 after:left-0",
                  "after:w-0 hover:after:w-full after:h-0.5",
                  "after:bg-primary after:transition-all after:duration-300"
                )}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right (CTA Button) — offset right to avoid ThemeToggle overlap */}
          <div className="hidden lg:flex items-center pr-12">
            <Button variant="primary" size="sm" id="nav-cta">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile / Tablet Controls — visible below lg, offset right to avoid ThemeToggle */}
          <div className="flex lg:hidden items-center pr-12">
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-muted transition-colors focus-ring"
                  aria-label="Open navigation menu"
                  id="mobile-menu-btn"
                >
                  <Menu className="w-5 h-5 text-text-primary" />
                </button>
              </Dialog.Trigger>

              <AnimatePresence>
                {mobileOpen && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay asChild>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                      />
                    </Dialog.Overlay>
                    <Dialog.Content asChild>
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[80%] max-w-sm site-bg border-l border-border z-50 p-6 flex flex-col"
                      >
                        <VisuallyHidden.Root>
                          <Dialog.Title>Navigation Menu</Dialog.Title>
                          <Dialog.Description>Site navigation links</Dialog.Description>
                        </VisuallyHidden.Root>

                        {/* Drawer Header */}
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-lg font-medium text-text-primary tracking-tight">
                            inriser<span className="text-accent">.</span>
                          </span>
                          <Dialog.Close asChild>
                            <button
                              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-muted transition-colors focus-ring"
                              aria-label="Close navigation menu"
                            >
                              <X className="w-5 h-5 text-text-primary" />
                            </button>
                          </Dialog.Close>
                        </div>

                        {/* Drawer Links */}
                        <div className="flex flex-col gap-1 flex-1">
                          {navLinks.map((link, i) => (
                            <motion.a
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              className="text-base sm:text-lg font-semibold text-text-primary hover:text-primary transition-colors py-3 border-b border-border"
                            >
                              {link.label}
                            </motion.a>
                          ))}
                        </div>

                        {/* Drawer CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="pt-4 mt-auto"
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            className="w-full"
                            onClick={() => setMobileOpen(false)}
                          >
                            Join Waitlist
                          </Button>
                        </motion.div>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
