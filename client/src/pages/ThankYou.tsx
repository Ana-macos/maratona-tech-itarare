/**
 * Thank You Page - Confirmation after registration
 * - Success message with celebration animation
 * - Event details and next steps
 * - Back to home button
 */

import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Mail, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function ThankYou() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Success Animation Container */}
        <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <CheckCircle className="w-24 h-24 text-emerald-500 relative" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inscrição Confirmada!
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Obrigado por se inscrever no Maratona Tech Itararé! Sua inscrição foi recebida com sucesso.
          </p>

          {/* Confirmation Details Card */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              {/* Email Confirmation */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-500 mt-1" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Confirmação por Email
                  </h3>
                  <p className="text-muted-foreground">
                    Um email de confirmação foi enviado para o endereço fornecido. Verifique sua caixa de entrada e pasta de spam.
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-cyan-500 mt-1" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Próximas Etapas
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    O evento acontecerá de <strong>10 a 13 de Abril</strong>. Fique atento para:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>✓ Informações sobre formação de equipes</li>
                    <li>✓ Detalhes técnicos e recursos disponíveis</li>
                    <li>✓ Lembretes sobre datas importantes</li>
                    <li>✓ Acesso ao repositório de desafios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
              <p className="text-sm text-foreground font-medium">Desafios</p>
              <p className="text-xs text-muted-foreground mt-1">para escolher</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-600 mb-2">R$ 4K</div>
              <p className="text-sm text-foreground font-medium">Prêmio</p>
              <p className="text-xs text-muted-foreground mt-1">para o vencedor</p>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">4</div>
              <p className="text-sm text-foreground font-medium">Mentores</p>
              <p className="text-xs text-muted-foreground mt-1">especializados</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Voltar para Home
              </Button>
            </Link>

            <a
              href="https://www.itarare.sp.gov.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Saiba Mais sobre Itararé
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Dúvidas? Entre em contato conosco em{" "}
              <a
                href="mailto:contato@maratonatechitarare.com.br"
                className="text-primary hover:underline font-semibold"
              >
                contato@maratonatechitarare.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
