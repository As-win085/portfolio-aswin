import { useState, useEffect } from "react";
import { navHome, navOther } from "../constants";
import { Link } from "react-router-dom";
import { Menu, X,ArrowLeft } from "lucide-react";

const NavBar = ({home}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = home ? navHome : navOther;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {
              !home && (
                <Link to="/">
                  <ArrowLeft className="text-white w-6 h-6" />
                </Link>
              )
            }
            <a href="/" className="text-white text-xl font-semibold">
            Aswin Biju
          </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-8">
              {navLinks.map(({ link, name }) => (
                <li key={name} className="relative group">
                  <a
                    href={link}
                    className="text-white transition-colors"
                  >
                    {name}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact */}
          {home && (
            <div>
              <a
            href="#contact"
            className="hidden lg:inline-block border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            Contact me
          </a>

          {/* Mobile Right */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
              <a href="#contact" className="text-sm">
              Contact me
            </a>
            </button>
            <button onClick={() => setIsOpen(true)}>
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>
            </div>
          )}
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-white w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col mt-6">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a
                href={link}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white transition hover:bg-white hover:text-black"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default NavBar;
