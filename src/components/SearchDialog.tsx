import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Search, Home, Users, Award, Mail, Image, FileText, Phone, MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  icon: any;
  category: string;
  keywords: string[]; // Searchable keywords/aliases
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // All searchable items with keywords/aliases
  const searchableItems: SearchResult[] = [
    // Pages
    { 
      title: "Home", 
      description: "Return to homepage", 
      href: "/", 
      icon: Home, 
      category: "Pages",
      keywords: ["home", "homepage", "main", "start", "index", "landing"]
    },
    { 
      title: "About Us", 
      description: "Learn about our company", 
      href: "/about", 
      icon: FileText, 
      category: "Pages",
      keywords: ["about", "company", "who we are", "our story", "history", "mission", "vision", "values", "15 years", "anniversary"]
    },
    { 
      title: "Gallery", 
      description: "View our photo gallery", 
      href: "/gallery", 
      icon: Image, 
      category: "Pages",
      keywords: ["gallery", "photos", "pictures", "images", "events", "media", "csr", "training", "awards", "celebrations"]
    },
    { 
      title: "Contact Us", 
      description: "Get in touch with us", 
      href: "/contact", 
      icon: Mail, 
      category: "Pages",
      keywords: ["contact", "reach us", "get in touch", "support", "help", "inquiries", "questions", "form", "message"]
    },
    
    // Team
    { 
      title: "Board of Directors", 
      description: "Meet our board members", 
      href: "/team/board-of-directors", 
      icon: Award, 
      category: "Team",
      keywords: ["board", "directors", "leadership", "governance", "chairman", "board members", "executives"]
    },
    { 
      title: "Management Team", 
      description: "Our executive leadership", 
      href: "/team/management", 
      icon: Briefcase, 
      category: "Team",
      keywords: ["management", "executives", "ceo", "cfo", "coo", "managers", "leadership team", "staff"]
    },
    { 
      title: "Brand Ambassadors", 
      description: "Our ambassadors", 
      href: "/team/ambassador", 
      icon: Users, 
      category: "Team",
      keywords: ["ambassadors", "brand", "representatives", "faces", "celebrities", "influencers"]
    },
    
    // Contact Methods
    { 
      title: "Call Us", 
      description: "+233 (0) 302 200 390 / +233 (0) 596 920 833", 
      href: "/contact#call", 
      icon: Phone, 
      category: "Contact",
      keywords: ["call", "phone", "telephone", "ring", "dial", "hotline", "number", "mobile", "office line", "0302200390", "0596920833"]
    },
    { 
      title: "Email Us", 
      description: "info@billsmicrocredit.com", 
      href: "/contact#email", 
      icon: Mail, 
      category: "Contact",
      keywords: ["email", "mail", "send message", "write", "info", "support", "customer service", "inbox"]
    },
    { 
      title: "Visit Us", 
      description: "Osu Danguah Circle, Accra", 
      href: "/contact#map", 
      icon: MapPin, 
      category: "Contact",
      keywords: ["visit", "location", "address", "office", "where", "map", "directions", "find us", "osu", "accra", "ghana", "danguah"]
    },
  ];

  // Enhanced filter with keyword matching
  const filteredResults = query.trim() === "" 
    ? searchableItems 
    : searchableItems.filter(item => {
        const searchTerm = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
        );
      });

  // Group results by category
  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  const handleSelect = (href: string) => {
    navigate(href);
    onOpenChange(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onOpenChange(false);
      setQuery("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-white dark:bg-gray-900">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search pages, team members, or contact info..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            autoFocus
          />
          {/* <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-1.5 font-mono text-xs text-gray-600 dark:text-gray-400">
            ESC
          </kbd> */}
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No results found</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Try searching for pages, team, or contact info
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className="mb-4 last:mb-0">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {category}
                  </p>
                  <div className="space-y-1">
                    {items.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.button
                          key={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => handleSelect(item.href)}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-left group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 dark:text-white truncate">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {item.description}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {/* <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">↓</kbd>
              <span>to navigate</span>
            </div> */}
            {/* <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">↵</kbd>
              <span>to select</span>
            </div> */}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
