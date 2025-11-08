import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Le prénom est requis" }).max(100),
  lastName: z.string().trim().max(100),
  email: z.string().trim().email({ message: "Email invalide" }).max(255),
  phone: z.string().trim().min(1, { message: "Le téléphone est requis" }).max(20),
  message: z.string().trim().min(1, { message: "Le message est requis" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      const form = formRef.current;
      if (!form) {
        throw new Error("Formulaire introuvable");
      }

      const formDataToSend = new FormData(form);

      // Web3Forms configuration
      formDataToSend.append("access_key", "75bc1c55-d538-416c-9882-dcf141c24a45");
      formDataToSend.append("to", "contact@lumcorporate.com");
      formDataToSend.append("subject", "Nouveau message de contact - LUM");
      formDataToSend.append("from_name", `${formData.firstName} ${formData.lastName}`);
      
      // Construct message
      const messageContent = `
Nouveau message de contact

Prénom: ${formData.firstName}
Nom: ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}

Message:
${formData.message}
      `;
      
      formDataToSend.set("message", messageContent);
      formDataToSend.append("botcheck", "");

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message envoyé!",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        form.reset();
      } else {
        throw new Error(data.message || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8 lg:sticky lg:top-32">
              {/* Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="font-sans text-foreground">Dites Bonjour, </span>
                  <br />
                  <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">
                    Nous Vous Écoutons
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground mt-6">
                  Nous serions ravis de vous entendre ! Remplissez le formulaire et nous vous répondrons dans les plus
                  brefs délais.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">TÉLÉPHONE</p>
                    <a
                      href="tel:+41766164402"
                      className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      +41 76 616 44 02
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">EMAIL</p>
                    <a
                      href="mailto:contact@lumcorporate.com"
                      className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      contact@lumcorporate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">ADRESSE</p>
                    <p className="text-xl font-semibold text-foreground">
                      Chemin de l'adret 9<br />
                      1212 Grand-Lancy
                      <br />
                      Genève, Suisse
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="hidden flex gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card border-2 border-border rounded-3xl p-8 lg:p-12 hover:border-primary/50 transition-colors">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields for Web3Forms */}
                <input type="hidden" name="botcheck" value="" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      Prénom <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "border-red-500" : ""}
                      placeholder="Jean"
                    />
                    {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "border-red-500" : ""}
                      placeholder="Dupont"
                    />
                    {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                    placeholder="jean.dupont@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Téléphone <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="+41 78 765 43 21"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500" : ""}
                    placeholder="Votre message..."
                    rows={6}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "ENVOYER LE MESSAGE"}
                </Button>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-20">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Agence Marketing </span>
                <span className="font-display text-gradient-blue">Genève</span>
              </h2>
              <p className="text-muted-foreground">Chemin de l'adret 9, 1212 Grand-Lancy, Genève, Suisse</p>
            </div>

            <div className="w-full h-[450px] rounded-3xl overflow-hidden border-2 border-border hover:border-primary/50 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d6.1!3d46.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c651c5c0f0001%3A0x1!2sChemain%20de%20l'Adret%209%2C%201212%20Grand-Lancy%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation LUM Agency - Chemin de l'adret 9, Grand-Lancy, Genève"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;