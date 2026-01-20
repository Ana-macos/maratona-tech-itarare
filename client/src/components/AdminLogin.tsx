/**
 * Admin Login Component
 * - Formulário de login para acessar o painel administrativo
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdminAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      if (login(password)) {
        toast.success("Autenticação bem-sucedida!");
        setPassword("");
      } else {
        toast.error("Senha incorreta");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardHeader className="space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="font-display text-2xl text-center">
            Painel Administrativo
          </CardTitle>
          <CardDescription className="text-center">
            Insira a senha para acessar o gerenciamento de inscrições
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="font-display font-semibold">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="border-border bg-background/50 focus:bg-background transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg py-3 transition-all duration-300"
            >
              {isLoading ? "Autenticando..." : "Acessar Painel"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Dica: Use a senha padrão para acessar o painel de administração
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
