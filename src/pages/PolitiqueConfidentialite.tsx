import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                La présente Politique de confidentialité décrit la manière dont LUM.CORP collecte, utilise, et protège 
                les informations personnelles des utilisateurs visitant le site lumcorporate.com (ci-après dénommé "le Site"). 
                En accédant et en utilisant notre Site, vous acceptez les termes de cette politique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Collecte des Données Personnelles</h2>
              <p>Nous collectons des informations personnelles lorsque :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous remplissez un formulaire de contact sur notre site.</li>
                <li>Vous vous inscrivez à notre newsletter.</li>
                <li>Vous interagissez avec notre équipe dans le cadre de nos services de création de contenu.</li>
              </ul>
              <p className="mt-4">Les données que nous collectons peuvent inclure :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informations d'identification</strong> : nom, prénom, adresse e-mail, numéro de téléphone.</li>
                <li><strong>Informations professionnelles</strong> : nom de l'entreprise, secteur d'activité.</li>
                <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages visitées sur notre site, temps de navigation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilisation des Données Personnelles</h2>
              <p>Les informations collectées sont utilisées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Fournir nos services</strong> : création de contenu organique et services de marketing digital.</li>
                <li><strong>Améliorer notre service client</strong> : en répondant plus efficacement à vos demandes.</li>
                <li><strong>Envoyer des newsletters</strong> ou des informations promotionnelles sur nos services, si vous avez consenti à les recevoir.</li>
                <li><strong>Analyser et améliorer notre site web</strong> : pour mieux comprendre l'expérience utilisateur et optimiser notre présence en ligne.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Partage des Données</h2>
              <p>
                Nous ne vendons ni ne louons vos informations personnelles à des tiers. Toutefois, nous pouvons partager 
                vos informations avec :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Fournisseurs de services tiers</strong> : qui nous aident à exploiter notre site ou à fournir nos services.</li>
                <li><strong>Autorités légales</strong> : si la loi nous y oblige ou si cela est nécessaire pour protéger nos droits ou ceux d'autrui.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Utilisation des Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience en ligne. Les cookies sont de petits 
                fichiers textes stockés sur votre appareil lorsque vous visitez un site web. Nous utilisons des cookies pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Suivi analytique</strong> : afin de comprendre comment les utilisateurs interagissent avec notre site et améliorer sa performance.</li>
                <li><strong>Ciblage publicitaire</strong> : pour vous proposer des annonces personnalisées.</li>
              </ul>
              <p className="mt-4">
                Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur, mais cela pourrait 
                affecter la fonctionnalité du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Protection des Données</h2>
              <p>
                Nous prenons toutes les mesures de sécurité nécessaires pour protéger vos données personnelles contre 
                la perte, le vol, l'accès non autorisé, l'utilisation abusive ou la divulgation.
              </p>
              <p className="mt-4">
                Nous utilisons des technologies de cryptage pour sécuriser les transactions et les communications sensibles 
                effectuées sur notre site. Toutefois, malgré nos efforts, aucune méthode de transmission sur Internet n'est 
                totalement sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vos Droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants 
                concernant vos informations personnelles :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès</strong> : Vous avez le droit de savoir quelles données nous détenons à votre sujet.</li>
                <li><strong>Droit de rectification</strong> : Si vos données sont inexactes ou incomplètes, vous pouvez demander à ce qu'elles soient corrigées.</li>
                <li><strong>Droit de suppression</strong> : Vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.</li>
                <li><strong>Droit d'opposition</strong> : Vous pouvez vous opposer à l'utilisation de vos données à des fins de marketing direct.</li>
                <li><strong>Droit à la portabilité des données</strong> : Vous avez le droit de recevoir les données que vous nous avez fournies dans un format structuré et couramment utilisé.</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, veuillez nous contacter à contact@lumcorporate.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Durée de Conservation des Données</h2>
              <p>
                Nous conservons vos données personnelles uniquement le temps nécessaire pour atteindre les finalités 
                pour lesquelles elles ont été collectées, sauf obligation légale contraire. Une fois ces finalités atteintes, 
                vos données seront supprimées ou anonymisées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications de la Politique de Confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette Politique de confidentialité à tout moment. Toute modification 
                sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement 
                cette page pour rester informé de la manière dont nous protégeons vos informations personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p>
                Si vous avez des questions concernant notre Politique de confidentialité ou la manière dont nous utilisons 
                vos données, vous pouvez nous contacter à contact@lumcorporate.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
