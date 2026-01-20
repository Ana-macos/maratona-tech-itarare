/**
 * Footer Component - Organic Tech Fusion Design
 * - Wave divider for organic transition
 * - Brand colors and typography
 * - Social links and contact information
 */

import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground">


      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <img
              src="/images/logo.png"
              alt="Maratona Tech Itararé"
              className="h-16 w-auto mb-4"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Hackathon colaborativo focado em inovação e tecnologia para
              impulsionar o turismo em Itararé.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Sobre o Evento
                </a>
              </li>
              <li>
                <a
                  href="#desafios"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Desafios
                </a>
              </li>
              <li>
                <a
                  href="#cronograma"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Cronograma
                </a>
              </li>
              <li>
                <a
                  href="#premios"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Prêmios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Itararé, São Paulo, Brasil
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a
                  href="mailto:contato@maratonatechitarare.com.br"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  contato@maratonatechitarare.com.br
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Maratona Tech Itararé. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
