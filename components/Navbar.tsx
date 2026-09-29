"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { PERSONAL_INFO } from "@/lib/data";
import { Sun, Moon, Menu, X, ArrowUpRight, Globe2 } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracker
      const sections = ["home", "about", "services", "experience", "stack", "projects", "cms", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "CMS", href: "#cms", id: "cms" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "navbar-scrolled py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
              {PERSONAL_INFO.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[#E76F51] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] hidden sm:flex items-center gap-1.5 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A8B72] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7A8B72]"></span>
                </span>
                International Availability
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full navbar-nav-pill">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium navbar-nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] ${
                    isActive ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark espresso" : "light ivory"} theme`}
              className="p-2 sm:p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#E76F51]/40 text-[var(--text-primary)] hover:text-[#E76F51] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#C9A66B]" />}
            </button>

            {/* Direct CV Link */}
            <a
              href="#cv"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--primary-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
            >
              CV
            </a>

            {/* Prominent Hire Me CTA */}
            <a
              href="#contact"
              className="cta-terracotta inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] focus-visible:ring-offset-2"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full navbar-mobile-drawer shadow-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Navigation
              </span>
              <span className="text-xs text-[#7A8B72] font-medium flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5" /> Global Remote Ready
              </span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-[#E76F51]/10 text-[#E76F51] font-semibold"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
              <a
                href="#cv"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all"
              >
                View Professional CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cta-terracotta w-full text-center py-3 rounded-lg text-sm font-semibold shadow-sm flex items-center justify-center gap-2"
              >
                <span>Start a Project / Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
