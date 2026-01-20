/**
 * Navigation Component - Organic Tech Fusion Design
 * - Transparent background with backdrop blur on scroll
 * - Colorful text with gradient and letter-by-letter coloring
 * - Smooth transitions and hover effects
 * - Logo integration with brand colors
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre", colors: ["text-emerald-500", "text-teal-500"] },
    { href: "#desafios", label: "Desafios", colors: ["text-cyan-500", "text-blue-500"] },
    { href: "#cronograma", label: "Cronograma", colors: ["text-teal-500", "text-emerald-500"] },
    { href: "#premios", label: "Prêmios", colors: ["text-cyan-400", "text-teal-500"] },
    { href: "#faq", label: "FAQ", colors: ["text-emerald-400", "text-cyan-500"] },
  ];

  const renderColoredText = (text: string, colors: string[]) => {
    return text.split("").map((char, index) => {
      const colorClass = colors[index % colors.length];
      return (
        <span key={index} className={`${colorClass} font-bold`}>
          {char}
        </span>
      );
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                src="/images/logo.png"
                alt="Maratona Tech"
                className="h-14 w-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold hover:scale-110 transition-transform duration-300 relative group text-lg"
              >
                {renderColoredText(link.label, link.colors)}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button
              size="lg"
              onClick={() => {}}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-white">Inscreva-se</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bold text-lg transition-transform duration-300 py-2 hover:scale-110"
                >
                  {renderColoredText(link.label, link.colors)}
                </a>
              ))}
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-full shadow-lg mt-2"
              >
                Inscreva-se
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
