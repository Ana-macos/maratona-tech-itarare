/**
 * Sponsors Section Component - Organic Tech Fusion Design
 * - Display sponsor logos and information
 * - Responsive grid layout
 * - Smooth animations
 */

import { Card, CardContent } from "@/components/ui/card";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: string;
}

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "TechCorp Brasil",
    logo: "https://via.placeholder.com/200x100?text=TechCorp",
    website: "https://techcorp.com.br",
    category: "Ouro",
  },
  {
    id: "2",
    name: "Inovação Digital",
    logo: "https://via.placeholder.com/200x100?text=Inovacao",
    website: "https://inovacaodigital.com.br",
    category: "Ouro",
  },
  {
    id: "3",
    name: "Prefeitura de Itararé",
    logo: "https://via.placeholder.com/200x100?text=Prefeitura",
    website: "https://itarare.sp.gov.br",
    category: "Governo",
  },
  {
    id: "4",
    name: "Câmara de Comércio",
    logo: "https://via.placeholder.com/200x100?text=Camara",
    website: "https://camaracomercio.com.br",
    category: "Prata",
  },
  {
    id: "5",
    name: "Universidade Local",
    logo: "https://via.placeholder.com/200x100?text=Universidade",
    website: "https://universidade.edu.br",
    category: "Prata",
  },
  {
    id: "6",
    name: "Associação Turismo",
    logo: "https://via.placeholder.com/200x100?text=Turismo",
    website: "https://turismo-itarare.com.br",
    category: "Bronze",
  },
];

export default function SponsorsSection() {
  const goldSponsors = sponsors.filter((s) => s.category === "Ouro");
  const silverSponsors = sponsors.filter((s) => s.category === "Prata");
  const bronzeSponsors = sponsors.filter((s) => s.category === "Bronze");
  const govSponsors = sponsors.filter((s) => s.category === "Governo");

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agradecemos o apoio das empresas e instituições que tornam o Maratona Tech Itararé possível.
            </p>
          </div>

          {/* Gold Sponsors */}
          {goldSponsors.length > 0 && (
            <div className="mb-16 fade-in-section opacity-0 transition-all duration-1000">
              <h3 className="text-center text-xl font-semibold text-foreground mb-8">
                Patrocinadores Ouro
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {goldSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-32 w-full max-w-xs flex items-center justify-center bg-background/50 hover:bg-background">
                      <CardContent className="p-6">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Government Sponsors */}
          {govSponsors.length > 0 && (
            <div className="mb-16 fade-in-section opacity-0 transition-all duration-1000">
              <h3 className="text-center text-xl font-semibold text-foreground mb-8">
                Apoio Institucional
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {govSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-32 w-full max-w-xs flex items-center justify-center bg-background/50 hover:bg-background">
                      <CardContent className="p-6">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {silverSponsors.length > 0 && (
            <div className="mb-16 fade-in-section opacity-0 transition-all duration-1000">
              <h3 className="text-center text-xl font-semibold text-foreground mb-8">
                Patrocinadores Prata
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {silverSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-24 flex items-center justify-center bg-background/50 hover:bg-background">
                      <CardContent className="p-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors */}
          {bronzeSponsors.length > 0 && (
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <h3 className="text-center text-xl font-semibold text-foreground mb-8">
                Patrocinadores Bronze
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bronzeSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-20 flex items-center justify-center bg-background/50 hover:bg-background">
                      <CardContent className="p-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Contact for Sponsorship */}
          <div className="mt-16 text-center fade-in-section opacity-0 transition-all duration-1000">
            <p className="text-muted-foreground mb-4">
              Interessado em patrocinar o Maratona Tech Itararé?
            </p>
            <a
              href="mailto:patrocinio@maratonatechitarare.com.br"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
