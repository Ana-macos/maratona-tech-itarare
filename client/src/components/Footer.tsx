/**
 * Footer Component - Organic Tech Fusion Design
 * - Wave divider for organic transition
 * - Brand colors and typography
 * - Social links and contact information
 */

import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground">


      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div>
            <img
              src="/images/logo.png"
              alt="Maratona Tech Itararé"
              className="h-20 w-auto mb-4"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Hackathon colaborativo focado em inovação e tecnologia para
              impulsionar o turismo em Itararé.
            </p>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            Maratona Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
