import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo-lum.png";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"agence" | "services" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: "agence" | "services") => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 h-16 sm:h-20 transition-all duration-300 w-full ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full w-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <img src={logo} alt="LUM" className="h-[50px] sm:h-[60px] w-auto" />
            </a>
          </div>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8">
            <Button
              variant="nav"
              size="sm"
              className="bg-foreground/10 rounded-full px-6"
              onClick={() => (window.location.href = "/")}
            >
              Accueil
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-foreground/10 text-foreground data-[state=open]:bg-foreground/10">
                    Agence
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border">
                    <ul className="w-[300px] p-4 space-y-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/agence" className="block p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                            <div className="font-semibold text-foreground mb-1">L'agence LUM.CORP</div>
                            <div className="text-sm text-muted-foreground">Découvrez notre agence</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/carriere" className="block p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                            <div className="font-semibold text-foreground mb-1">Carrière</div>
                            <div className="text-sm text-muted-foreground">Rejoins notre équipe</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-foreground/10 text-foreground data-[state=open]:bg-foreground/10">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border">
                    <ul className="w-[300px] p-4 space-y-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                            <div className="font-semibold text-foreground mb-1">Abonnement Communication</div>
                            <div className="text-sm text-muted-foreground">Pour une croissance optimisée</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/services-360"
                            className="block p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                          >
                            <div className="font-semibold text-foreground mb-1">Services 360</div>
                            <div className="text-sm text-muted-foreground">Toutes nos solutions</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* <Button variant="nav" size="sm" onClick={() => window.location.href = '/references'}>
              Références
            </Button> */}
            <Button variant="nav" size="sm" onClick={() => (window.location.href = "/realisations")}>
              Nos Réalisations
            </Button>
            <Button variant="nav" size="sm" onClick={() => (window.location.href = "/contact")}>
              Contact
            </Button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="hero"
              size="lg"
              className="rounded-full text-xs sm:text-sm whitespace-nowrap"
              onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
            >
              PRENDRE RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: isScrolled ? "64px" : "80px" }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {/* Mobile Menu Links */}
          <Button
            variant="nav"
            size="lg"
            className={`text-2xl font-semibold bg-foreground/10 rounded-full px-8 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "50ms" : "0ms" }}
            onClick={() => {
              handleLinkClick();
              window.location.href = "/";
            }}
          >
            Accueil
          </Button>

          <div
            className={`transform transition-all duration-300 flex flex-col items-center ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
          >
            <Button
              variant="nav"
              size="lg"
              className="text-2xl font-semibold flex items-center justify-center gap-2"
              onClick={() => toggleDropdown("agence")}
            >
              Agence
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openDropdown === "agence" ? "rotate-180" : ""}`}
              />
            </Button>
            {openDropdown === "agence" && (
              <div className="mt-4 space-y-3 flex flex-col items-center">
                <Button
                  variant="nav"
                  size="lg"
                  className="text-lg"
                  onClick={() => {
                    handleLinkClick();
                    window.location.href = "/agence";
                  }}
                >
                  L'agence LUM.CORP
                </Button>
                <Button
                  variant="nav"
                  size="lg"
                  className="text-lg"
                  onClick={() => {
                    handleLinkClick();
                    window.location.href = "/carriere";
                  }}
                >
                  Carrière
                </Button>
              </div>
            )}
          </div>

          <div
            className={`transform transition-all duration-300 flex flex-col items-center ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "150ms" : "0ms" }}
          >
            <Button
              variant="nav"
              size="lg"
              className="text-2xl font-semibold flex items-center justify-center gap-2"
              onClick={() => toggleDropdown("services")}
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""}`}
              />
            </Button>
            {openDropdown === "services" && (
              <div className="mt-4 space-y-3 flex flex-col items-center">
                <Button
                  variant="nav"
                  size="lg"
                  className="text-lg"
                  onClick={() => {
                    handleLinkClick();
                    window.location.href = "/";
                  }}
                >
                  Abonnement Communication
                </Button>
                <Button
                  variant="nav"
                  size="lg"
                  className="text-lg"
                  onClick={() => {
                    handleLinkClick();
                    window.location.href = "/services-360";
                  }}
                >
                  Services 360
                </Button>
              </div>
            )}
          </div>

          {/* <Button
            variant="nav"
            size="lg"
            className={`text-2xl font-semibold transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
            onClick={() => {
              handleLinkClick();
              window.location.href = '/references';
            }}
          >
            Références
          </Button> */}

          <Button
            variant="nav"
            size="lg"
            className={`text-2xl font-semibold transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
            onClick={() => {
              handleLinkClick();
              window.location.href = "/realisations";
            }}
          >
            Nos Réalisations
          </Button>

          <Button
            variant="nav"
            size="lg"
            className={`text-2xl font-semibold transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "300ms" : "0ms" }}
            onClick={() => {
              handleLinkClick();
              window.location.href = "/contact";
            }}
          >
            Contact
          </Button>

          {/* Mobile CTA Button */}
          <div
            className={`pt-4 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "350ms" : "0ms" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="rounded-full text-base px-10 py-6"
              onClick={() => {
                handleLinkClick();
                window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank");
              }}
            >
              PRENDRE RDV
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
