/**
 * Blog Section Component - Organic Tech Fusion Design
 * - Latest news and updates about the hackathon
 * - Card-based layout with dates and categories
 * - Engaging content to keep participants updated
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Inscrições Abertas! Conheça os Desafios do Maratona Tech Itararé",
    excerpt:
      "Estamos oficialmente lançando as inscrições para o Maratona Tech Itararé 2026! Descubra os 4 desafios principais focados em turismo e inovação.",
    category: "Evento",
    date: "20 de Janeiro, 2026",
    author: "Equipe Maratona Tech",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Conheça Nossos Mentores Especialistas",
    excerpt:
      "Apresentamos os mentores que guiarão sua jornada no hackathon. Profissionais com experiência em web development, mobile, UX/UI e cloud infrastructure.",
    category: "Mentoria",
    date: "18 de Janeiro, 2026",
    author: "Equipe Maratona Tech",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Turismo Digital: O Futuro da Experiência do Visitante",
    excerpt:
      "Entenda como a tecnologia está transformando a forma como as pessoas exploram destinos turísticos. Tendências e oportunidades para o Maratona Tech.",
    category: "Tendências",
    date: "15 de Janeiro, 2026",
    author: "Marina Silva",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Dicas para Formar uma Equipe Vencedora",
    excerpt:
      "Confira nossas recomendações para montar uma equipe equilibrada e preparada para vencer no hackathon. Diversidade de skills é essencial!",
    category: "Dicas",
    date: "12 de Janeiro, 2026",
    author: "Carlos Mendes",
    readTime: "6 min",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Evento: { bg: "bg-primary/10", text: "text-primary" },
  Mentoria: { bg: "bg-accent/10", text: "text-accent" },
  Tendências: { bg: "bg-green-100", text: "text-green-700" },
  Dicas: { bg: "bg-purple-100", text: "text-purple-700" },
};

export default function BlogSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-1000">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Blog & Notícias
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique atualizado com as últimas notícias, dicas e atualizações sobre o
            Maratona Tech Itararé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Featured Post */}
          <Card
            className="fade-in-section opacity-0 transition-all duration-1000 md:col-span-2 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden group"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    className={`${categoryColors[blogPosts[0].category]?.bg} ${categoryColors[blogPosts[0].category]?.text} border-0`}
                  >
                    {blogPosts[0].category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <CardTitle className="font-display text-2xl mb-3">
                  {blogPosts[0].title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Por {blogPosts[0].author} • {blogPosts[0].readTime}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <div className="hidden md:block bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </Card>

          {/* Other Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className="fade-in-section opacity-0 transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50 group"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    className={`${categoryColors[post.category]?.bg} ${categoryColors[post.category]?.text} border-0`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="font-display text-lg group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {post.author} • {post.readTime}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    Ler <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
