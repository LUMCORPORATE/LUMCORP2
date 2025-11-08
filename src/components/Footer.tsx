// src/components/Footer.tsx
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail /*, Linkedin, X, Instagram, Youtube */ } from "lucide-react";
import logo from "@/assets/logo-lum.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    setLoading(true);
    setResult("Envoi en cours…");

    // Utiliser la ref au lieu de event.target (évite l'erreur après await)
    const form = formRef.current;
    if (!form) {
      setLoading(false);
      setResult("Formulaire introuvable.");
      return;
    }

    const formData = new FormData(form);

    // --- Web3Forms requis ---
    formData.append("access_key", "75bc1c55-d538-416c-9882-dcf141c24a45");

    // --- Optionnel mais utile : destinataire/metadata mail ---
    formData.append("to", "contact@lumcorporate.com");
    formData.append("subject", "Nouvelle inscription newsletter");
    formData.append("from_name", "Formulaire Newsletter - LUM");
    formData.append("message", `Inscription newsletter : ${email}`);

    // --- Anti-bot (champ honeypot) ---
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Inscription enregistrée. Merci !");
        setEmail("");
        form.reset(); // ✅ plus de SyntheticEvent, pas d'erreur
      } else {
        console.error("Web3Forms error:", data);
        setResult(data.message || "Erreur lors de l’envoi.");
      }
    } catch (err) {
      console.error(err);
      setResult("Impossible d’envoyer le formulaire pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne gauche — Newsletter */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block cursor-pointer">
              <img src={logo} alt="LUM" className="h-12 w-auto mb-6" />
            </a>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              {/* Champ e-mail */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>

              {/* Champs cachés */}
              <input type="hidden" name="botcheck" value="" />
              {/* Pour rediriger après succès (optionnel) :
              <input type="hidden" name="redirect" value="https://ton-domaine/merci" />
              */}

              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={!email || loading}
              >
                {loading ? "Envoi…" : "S'abonner"}
              </Button>

              {/* Texte légal (sans case à cocher) */}
              <p className="text-xs text-muted-foreground">
                En vous inscrivant pour recevoir des courriels, vous acceptez nos{" "}
                <a
                  href="/conditions-generales-de-vente"
                  className="underline hover:no-underline"
                >
                  conditions générales de vente
                </a>{" "}
                et notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="underline hover:no-underline"
                >
                  politique de confidentialité
                </a>.
              </p>

              {/* Retour d'état */}
              {result && (
                <p className="text-xs text-muted-foreground">{result}</p>
              )}
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              [ Agence ]
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li className="hidden">
                <a
                  href="/references"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Références
                </a>
              </li>
              <li>
                <a
                  href="/services-360"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services 360
                </a>
              </li>
            </ul>
          </div>

          {/* Législation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              [ Législation ]
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/politique-confidentialite"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mentions Légales
                </a>
              </li>
              <li>
                <a
                  href="/conditions-generales-de-vente"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Conditions Générales de Vente
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              [ Nous Contacter ]
            </h4>
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

              {/* Réseaux sociaux (décommenter si besoin)
              <div className="pt-6 flex items-center gap-4 flex-wrap">
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  Nous suivre
                </span>
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
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
