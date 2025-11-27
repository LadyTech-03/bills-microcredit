import { MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const mediaIcons = [
  // { name: "WhatsApp", href: "/icons/whatsapp-icon.svg", link: "#whatsapp",},
  { name: "Facebook", href: "/icons/facebook-icon.svg", link: "#facebook",},
  { name: "Twitter", href: "/icons/twitter.svg", link: "#twitter",},
  { name: "WhatsApp", href: "/icons/youtube.svg", link: "#youtube",},
]

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground py-2.5 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="#location" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Osu Danquah Circle Ring Road E</span>
            </a>
            <a 
              href="mailto:info@billsmicrocredit.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">info@billsmicrocredit.com</span>
            </a>
            <a 
              href="tel:+9806071234" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+233 30 2200 390 / +233 59 6920 833</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Follow us:</span>
            <div className="flex items-center gap-3">
              {mediaIcons.map((icon) => (
                <a 
                  key={icon.name}
                  href={icon.href} 
                  className="hover:scale-105 transition-colors duration-300"
                  aria-label={icon.name}
                >
                  <img src={icon.href} alt={icon.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
