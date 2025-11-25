import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
   { href: "/fcfs", label: "FCFS" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path) =>
    `px-3 py-1 text-sm rounded-full transition-colors duration-300 ${
      location.pathname === path
        ? "bg-gray-700 text-white shadow-inner"
        : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 backdrop-blur-xl ${
        scrolled ? "bg-gray-900/95 border-gray-700" : "bg-gray-900/70 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <Link
          to="/"
          className="hidden md:flex items-center gap-2 text-[0.65rem] tracking-[0.4em] uppercase text-gray-300 hover:text-white transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          portfolio
        </Link>

        <nav className="flex-1 hidden md:flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-2 border border-gray-700 shadow-sm">
            {navMenu.map((link) => (
              <Link key={link.href} to={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-300">
            available
          </span>
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-gray-700 text-white hover:bg-gray-600 rounded-full px-6"
          >
            Contact Me
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Button
            onClick={() => setSheetOpen(true)}
            variant="outline"
            size="sm"
            className="border-gray-400 text-white bg-gray-800 rounded-full"
          >
            Contact
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-full bg-gray-800 border border-gray-700"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-700 bg-gray-900/95 backdrop-blur px-6 py-5 space-y-3">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded-2xl border px-4 py-3 text-center text-sm ${navLinkClass(
                link.href
              )} !border-gray-700`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-gray-900/95 text-white backdrop-blur-xl">
          <SheetHeader>
            <SheetTitle
              className="text-2xl px-4 mt-10 text-white"
              style={{ fontFamily: "satoshi-bold" }}
            >
              Contact Me Now
            </SheetTitle>
          </SheetHeader>

          <div className="px-8 space-y-5 pt-6" style={{ fontFamily: "satoshi-medium" }}>
            <div className="flex items-center gap-3 text-gray-200">
              <MdEmail className="text-white" size={20} />
              <span>johnmarkcaya222@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <MdPhone className="text-white" size={20} />
              <span>+63 961 525 1080</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <MdLocationOn className="text-white" size={20} />
              <span>Ibabao, Cordova, Cebu</span>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <h4 className="mb-4 text-lg text-white" style={{ fontFamily: "satoshi-bold" }}>
                Social Media
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaFacebookF className="text-white" size={18} />,
                    href: "https://www.facebook.com/JMarkCaya",
                  },
                  {
                    icon: <FaGithub className="text-white" size={18} />,
                    href: "https://github.com/Markoy2022",
                  },
                  {
                    icon: <FaInstagram className="text-white" size={18} />,
                    href: "https://www.instagram.com/makee_cya?igsh=eHR5aWs0ODNuZDI5",
                  },
                  {
                    icon: <FaTiktok className="text-white" size={18} />,
                    href: "https://www.tiktok.com/@makee_cya?_r=1&_t=ZS-91fQ7Jxuj4C",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 shadow hover:shadow-lg transition-shadow"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
