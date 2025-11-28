import { Search, Grid3x3, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchDialog from "./SearchDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];

  const teamItems = [
    { name: "Board of Directors", href: "/team/board-of-directors" },
    { name: "Management", href: "/team/management" },
    { name: "Ambassador", href: "/team/ambassador" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "pt-4 px-4" : ""
    }`}>
      <div className={`bg-navbar text-navbar-foreground shadow-sm transition-all duration-300 ${
        isScrolled ? "rounded-2xl container mx-auto shadow-lg shadow-topbar" : ""
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
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
                  className={`md:text-lg hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive(item.href)
                      ? "text-primary after:scale-x-100"
                      : "text-navbar-foreground after:scale-x-0"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Team Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-navbar-foreground md:text-lg hover:text-primary font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent p-0">
                      Team
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-2">
                        {teamItems.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                              >
                                <div className="text-base font-medium leading-none">{item.name}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-primary transition-colors duration-300"
                aria-label="Search"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
              >
                <Button className="hover:bg-topbar text-primary-foreground px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};

export default Navbar;

