/**
 * Mentors Section Component - Organic Tech Fusion Design
 * - Grid layout showcasing mentor profiles
 * - Professional photos, names, and specialties
 * - Hover effects and interactive cards
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Marina Silva",
    specialty: "Web Development & Startup Strategy",
    description:
      "Desenvolvedora full-stack com 10+ anos de experiência em startups. Especialista em React, Node.js e escalabilidade de aplicações.",
    image: "/images/mentor-1.png",
    email: "marina@tech.com",
    linkedin: "linkedin.com/in/marina",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    specialty: "Mobile Development & IoT",
    description:
      "Engenheiro de software com expertise em desenvolvimento mobile e soluções IoT. Mentor de múltiplos projetos de sucesso.",
    image: "/images/mentor-2.png",
    email: "carlos@tech.com",
    linkedin: "linkedin.com/in/carlos",
  },
  {
    id: 3,
    name: "Ana Costa",
    specialty: "UX/UI Design & User Experience",
    description:
      "Designer de experiência com foco em turismo digital. Especialista em criar interfaces intuitivas e acessíveis.",
    image: "/images/mentor-3.png",
    email: "ana@design.com",
    linkedin: "linkedin.com/in/ana",
  },
  {
    id: 4,
    name: "Roberto Oliveira",
    specialty: "Backend Development & Cloud",
    description:
      "Arquiteto de sistemas com expertise em cloud infrastructure e backend escalável. Especialista em AWS e DevOps.",
    image: "/images/mentor-4.png",
    email: "roberto@cloud.com",
    linkedin: "linkedin.com/in/roberto",
  },
];

export default function MentorsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nossos Mentores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aprenda com profissionais experientes que estão na vanguarda da inovação
            tecnológica e turismo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card
              key={mentor.id}
              className="fade-in-section opacity-0 transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-lg">{mentor.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-sm">
                  {mentor.specialty}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mentor.description}
                </p>

                <div className="flex gap-3 pt-2">
                  {mentor.linkedin && (
                    <a
                      href={`https://${mentor.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-colors duration-300"
                      title={`LinkedIn ${mentor.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-xs font-medium hidden sm:inline">LinkedIn</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
