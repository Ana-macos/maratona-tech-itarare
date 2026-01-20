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
}

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Empresa 1",
    logo: "https://via.placeholder.com/200x100?text=Empresa+1",
    website: "https://empresa1.com.br",
  },
  {
    id: "2",
    name: "Empresa 2",
    logo: "https://via.placeholder.com/200x100?text=Empresa+2",
    website: "https://empresa2.com.br",
  },
  {
    id: "3",
    name: "Empresa 3",
    logo: "https://via.placeholder.com/200x100?text=Empresa+3",
    website: "https://empresa3.com.br",
  },
  {
    id: "4",
    name: "Empresa 4",
    logo: "https://via.placeholder.com/200x100?text=Empresa+4",
    website: "https://empresa4.com.br",
  },
];

const supporters: Sponsor[] = [
  {
    id: "s1",
    name: "Apoio 1",
    logo: "https://via.placeholder.com/200x100?text=Apoio+1",
    website: "https://apoio1.com.br",
  },
  {
    id: "s2",
    name: "Apoio 2",
    logo: "https://via.placeholder.com/200x100?text=Apoio+2",
    website: "https://apoio2.com.br",
  },
  {
    id: "s3",
    name: "Apoio 3",
    logo: "https://via.placeholder.com/200x100?text=Apoio+3",
    website: "https://apoio3.com.br",
  },
];

export default function SponsorsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Patrocínios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agradecemos o apoio das empresas que tornam o Maratona Tech Itararé possível.
            </p>
          </div>

          {/* Sponsors */}
          {sponsors.length > 0 && (
            <div className="mb-16 fade-in-section opacity-0 transition-all duration-1000">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-32 flex items-center justify-center bg-background/50 hover:bg-background">
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

          {/* Supporters */}
          <div className="mt-20 fade-in-section opacity-0 transition-all duration-1000">
            <h3 className="text-center text-2xl font-bold text-foreground mb-12">
              Apoios
            </h3>
            {supporters.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supporters.map((supporter) => (
                  <a
                    key={supporter.id}
                    href={supporter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-24 flex items-center justify-center bg-background/50 hover:bg-background">
                      <CardContent className="p-4">
                        <img
                          src={supporter.logo}
                          alt={supporter.name}
                          className="h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            )}
          </div>

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
