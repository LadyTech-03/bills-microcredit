import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    // { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "/icons/facebook-icon.svg", href: "#" },
    { name: "Twitter", icon: "/icons/twitter.svg", href: "#" },
    { name: "Youtube", icon: "/icons/youtube.svg", href: "#" },
    { name: "Instagram", icon: "/icons/instagram-icon.svg", href: "#" },
    { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
    { name: "TikTok", icon: "/icons/tiktok-icon-dark.svg", href: "#" },
  ];

  return (
    <footer className="bg-topbar text-topbar-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logos/logo_white.png" alt="Bills Microcredit" className="w-36 h-auto" />
            </div>
            <p className="text-sm text-topbar-foreground/80 leading-relaxed">
              Your trusted financial partner for over 16 years. We bring convenient, reliable microcredit services right to your doorstep.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="size-5 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-full text-topbar-foreground group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-topbar-foreground">Navigate</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-topbar-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-topbar-foreground">Contact</h3>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div className="text-sm">
                  <a href="tel:+233302200390" className="block text-topbar-foreground/80 hover:text-primary transition-colors duration-300">
                    +233 (0) 302 200 390
                  </a>
                  <a href="tel:+233596920833" className="block text-topbar-foreground/80 hover:text-primary transition-colors duration-300">
                    +233 (0) 596 920 833
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div className="text-sm">
                  <a href="mailto:info@billsmicrocredit.com" className="text-topbar-foreground/80 hover:text-primary transition-colors duration-300">
                    info@billsmicrocredit.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div className="text-sm text-topbar-foreground/80 leading-relaxed">
                  Osu Danquah Circle Ring Road E<br />
                  Citizen Kofi House, Nuumo GOA Street<br />
                  Accra GA-035-4662, Accra – Ghana
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-topbar-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-topbar-foreground/60">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-topbar-foreground">Bills Microcredit</span>. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
