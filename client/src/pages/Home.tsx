/**
 * Home Page - Organic Tech Fusion Design
 * - Hero section with waterfall background
 * - About, challenges, timeline, prizes, and FAQ sections
 * - Smooth animations and organic transitions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Award,
  Calendar,
  Globe,
  Leaf,
  Lightbulb,
  MapPin,
  Settings,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const challenges = [
    {
      icon: Globe,
      title: "Divulgação Turística",
      description:
        "Desenvolva soluções inovadoras para promover os atrativos turísticos de Itararé, aumentando a visibilidade da região e atraindo mais visitantes.",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Experiência do Visitante",
      description:
        "Crie ferramentas e aplicações que melhorem a jornada do turista, desde o planejamento até a estadia, proporcionando experiências memoráveis.",
      color: "text-accent",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description:
        "Proponha soluções tecnológicas que promovam o turismo sustentável, preservando o meio ambiente e valorizando a cultura local.",
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "Gestão Pública e Privada",
      description:
        "Desenvolva sistemas para otimizar a gestão turística, facilitando a tomada de decisões e a colaboração entre setores público e privado.",
      color: "text-accent",
    },
  ];

  const timeline = [
    {
      date: "15 de Março",
      title: "Abertura das Inscrições",
      description: "Período para formação de equipes e cadastro no evento.",
    },
    {
      date: "10 de Abril",
      title: "Início do Hackathon",
      description: "Apresentação dos desafios e início do desenvolvimento.",
    },
    {
      date: "12 de Abril",
      title: "Mentoria e Desenvolvimento",
      description: "Sessões de mentoria com especialistas e desenvolvimento intensivo.",
    },
    {
      date: "13 de Abril",
      title: "Apresentações Finais",
      description: "Pitches das equipes e avaliação dos projetos pela banca.",
    },
    {
      date: "13 de Abril - Noite",
      title: "Premiação",
      description: "Anúncio dos vencedores e entrega dos prêmios.",
    },
  ];

  const prizes = [
    {
      position: "1º Lugar",
      prize: "R$ 10.000",
      description: "Prêmio em dinheiro + Mentorias especializadas",
      icon: Trophy,
    },
    {
      position: "2º Lugar",
      prize: "R$ 5.000",
      description: "Prêmio em dinheiro + Acesso a programas de aceleração",
      icon: Award,
    },
    {
      position: "3º Lugar",
      prize: "R$ 3.000",
      description: "Prêmio em dinheiro + Networking com investidores",
      icon: Award,
    },
  ];

  const faqs = [
    {
      question: "Quem pode participar do hackathon?",
      answer:
        "O Maratona Tech Itararé é aberto a desenvolvedores, designers, empreendedores, estudantes e profissionais de todas as áreas interessados em inovação e tecnologia. Não é necessário ter experiência prévia em hackathons.",
    },
    {
      question: "Como funciona a formação de equipes?",
      answer:
        "As equipes podem ter de 2 a 5 participantes. Você pode se inscrever com uma equipe já formada ou individualmente. Haverá um momento de networking para formação de equipes no início do evento.",
    },
    {
      question: "Preciso levar equipamentos?",
      answer:
        "Sim, cada participante deve trazer seu próprio laptop e equipamentos necessários para o desenvolvimento. O local oferecerá internet de alta velocidade, energia e espaço de trabalho.",
    },
    {
      question: "Haverá alimentação durante o evento?",
      answer:
        "Sim! Ofereceremos café da manhã, almoço, jantar e coffee breaks durante todo o evento para que você possa focar no desenvolvimento da sua solução.",
    },
    {
      question: "Quais são os critérios de avaliação?",
      answer:
        "Os projetos serão avaliados com base em: inovação, viabilidade técnica, impacto no turismo local, qualidade da apresentação e potencial de implementação.",
    },
    {
      question: "O que acontece com os projetos após o hackathon?",
      answer:
        "Os projetos vencedores terão oportunidade de implementação em parceria com a prefeitura e empresas locais. Todos os participantes mantêm os direitos sobre suas criações.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/70" />

        <div className="container relative z-10 text-center py-32">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-secondary-foreground leading-tight">
              Maratona Tech Itararé
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 font-medium">
              Turismo e Inovação
            </p>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Hackathon colaborativo focado em criar soluções tecnológicas reais
              para impulsionar o turismo, a economia local e a experiência dos
              visitantes em Itararé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Inscreva-se Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/20 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-background"
          >
            <path d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
                Sobre o Evento
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                O Maratona Tech Itararé é um hackathon colaborativo que une
                desenvolvedores, empresários e poder público em busca de soluções
                inovadoras para o turismo local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section opacity-0 transition-all duration-1000">
                <img
                  src="/images/tech-nature-abstract.png"
                  alt="Tecnologia e Natureza"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>

              <div className="space-y-6 fade-in-section opacity-0 transition-all duration-1000">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      Colaboração
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conectamos desenvolvedores, empresários e representantes do
                      poder público para criar soluções integradas e viáveis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      Inovação
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Foco em tecnologias emergentes e soluções criativas que
                      transformem a experiência turística em Itararé.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      Impacto Local
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Projetos desenvolvidos com potencial real de implementação
                      para impulsionar a economia e o turismo da região.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="desafios" className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Desafios
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Escolha um dos desafios abaixo e desenvolva uma solução tecnológica
              que transforme o turismo em Itararé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="fade-in-section opacity-0 transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <challenge.icon className={`w-7 h-7 ${challenge.color}`} />
                    </div>
                    <div>
                      <CardTitle className="font-display text-2xl mb-2">
                        {challenge.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {challenge.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute bottom-0 right-0 w-1/3 opacity-10 pointer-events-none">
          <img
            src="/images/collaboration-icon.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="cronograma" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Cronograma
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Acompanhe as principais etapas do Maratona Tech Itararé.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-20 fade-in-section opacity-0 transition-all duration-1000"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-primary border-4 border-background shadow-lg" />

                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-sm font-semibold text-primary">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="font-display text-xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="premios" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Premiação
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reconhecemos as melhores soluções com prêmios em dinheiro e
              oportunidades de desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prizes.map((prize, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 hover:shadow-2xl hover:-translate-y-3 ${
                  index === 0
                    ? "md:scale-110 border-primary/50 border-2"
                    : "border-2"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-gradient-to-br from-primary to-accent"
                          : "bg-gradient-to-br from-accent/80 to-primary/80"
                      }`}
                    >
                      <prize.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-display text-2xl mb-2">
                    {prize.position}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {prize.prize}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {prize.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <img
            src="/images/innovation-visual.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre o Maratona Tech Itararé.
            </p>
          </div>

          <div className="max-w-3xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="font-display font-semibold text-lg text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Pronto para Transformar o Turismo em Itararé?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Junte-se a nós nesta jornada de inovação e colaboração. Inscreva-se
              agora e faça parte da mudança!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Inscreva-se Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white animate-float" />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
