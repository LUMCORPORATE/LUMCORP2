import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Youtube, Instagram, Linkedin, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-lum.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      console.log("Subscribing:", email);
      // Handle subscription logic here
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left Column - Newsletter */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block cursor-pointer">
              <img src={logo} alt="LUM" className="h-12 w-auto mb-6" />
            </a>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              <Button type="submit" className="w-full rounded-full" disabled={!agreed}>
                S'abonner
              </Button>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer">
                  J’accepte <span className="underline">les conditions générales d’utilisation</span>
                </label>
              </div>
            </form>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">[ Agence ]</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li className="hidden">
                <a href="/references" className="text-muted-foreground hover:text-foreground transition-colors">
                  Références
                </a>
              </li>
              <li>
                <a href="/services-360" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services 360
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">[ Législation ]</h4>
            <ul className="space-y-3">
              <li>
                <a href="/politique-confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">[ Nous Contacter ]</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@lumcorporate.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact@lumcorporate.com
              </a>
              <a
                href="tel:+41766164402"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                +41.76.616.44.02
              </a>

              {/* Social Icons - Nous suivre */}
              {/*<div className="pt-6 flex items-center gap-4 flex-wrap">
                <span className="text-sm font-medium text-foreground whitespace-nowrap">Nous suivre</span>
                <div className="flex gap-2">
                  <a
                    href="https://www.youtube.com/@LUM.CORP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="Youtube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/lum.corp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@lum.corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lum-corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/lum_corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="X"
                  >
                    <X className="w-4 h-4" />
                  </a>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
