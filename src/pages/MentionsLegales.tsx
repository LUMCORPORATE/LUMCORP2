import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations Générales</h2>
              <div className="space-y-2">
                <p>
                  <strong>Raison sociale :</strong> Mathias Luna
                </p>
                <p>
                  <strong>Forme juridique :</strong> Raison Individuelle
                </p>
                <p>
                  <strong>Numéro d'entreprise (Registre du Commerce) :</strong> CHE-272.748.216
                </p>
                <p>
                  <strong>Siège social :</strong> Chemin de l'Adret 9, 1212, Genève, Suisse
                </p>
                <p>
                  <strong>Adresse e-mail :</strong>{" "}
                  <a href="mailto:contact@lumcorporate.com" className="text-primary hover:underline">
                    
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong> +41.76.616.44.02
                </p>
                <p>
                  <strong>Directeur LUM.CORP :</strong> Mathias Luna
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Propriété Intellectuelle</h2>
              <p>
                Le site lumcorporate.com et chacun des éléments qui le composent (tels que les marques, logos,
                graphismes, photographies, textes, etc.) sont protégés par le droit de la propriété intellectuelle.
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
                de LUM.CORP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Conditions d'Utilisation</h2>
              <p>
                Le site accessible à l'adresse lumcorporate.com est exploité dans le respect de la législation suisse.
                L'utilisation de ce site est régie par les présentes mentions légales et les conditions générales
                d'utilisation. En utilisant ce site, l'utilisateur reconnaît avoir pris connaissance de ces conditions
                et les avoir acceptées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protection des Données Personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), LUM.CORP s'engage à garantir la
                confidentialité des informations personnelles fournies par les visiteurs du site. Les données collectées
                sur ce site sont uniquement destinées à l'usage interne de LUM.CORP. Elles ne seront ni vendues, ni
                échangées, ni cédées à des tiers.
              </p>
              <p className="mt-4">
                <strong>Droit d'accès et de rectification :</strong>
              </p>
              <p>
                L'utilisateur bénéficie d'un droit d'accès, de rectification, de suppression et d'opposition aux données
                personnelles le concernant. Pour exercer ce droit, l'utilisateur peut envoyer un message à l'adresse
                suivante : contact@lumcorporate.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies</h2>
              <p>
                Le site lumcorporate.com peut être amené à utiliser des cookies pour faciliter la navigation et réaliser
                des statistiques de visites. L'utilisateur peut à tout moment désactiver l'utilisation de ces cookies en
                sélectionnant les paramètres appropriés dans son navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Responsabilité</h2>
              <p>
                Les informations proposées sur ce site sont fournies à titre informatif. LUM.CORP s'efforce de maintenir
                le site à jour, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations
                publiées. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité
                exclusive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Loi Applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit suisse. Tout litige sera soumis à la compétence
                exclusive des tribunaux compétents du canton de Genève.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
