import { Search, Grid3x3 } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "pt-4 px-4" : ""
    }`}>
      <div className={`bg-navbar text-navbar-foreground shadow-sm transition-all duration-300 ${
        isScrolled ? "rounded-2xl container mx-auto shadow-lg" : ""
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src="/logos/logo.png"
                alt="Logo"
                className="w-40 h-auto transition-transform duration-300"
              />
            </a>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-navbar-foreground md:text-lg hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:text-primary transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Button className="hover:bg-topbar text-primary-foreground px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg">
                Get In Touch
              </Button>
              <Button 
                size="icon"
                className="p-2.5 rounded-full hover:bg-topbar hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label="Menu"
              >
                <Grid3x3 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
