/**
 * Registration Form Component - Organic Tech Fusion Design
 * - Form for capturing participant information
 * - Validation and error handling
 * - Success message display
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

interface RegistrationFormData {
  name: string;
  email: string;
  interest: string;
}

interface RegistrationFormProps {
  onClose?: () => void;
}

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    { value: "web-dev", label: "Web Development" },
    { value: "mobile-dev", label: "Mobile Development" },
    { value: "ux-ui", label: "UX/UI Design" },
    { value: "backend", label: "Backend Development" },
    { value: "data", label: "Data & Analytics" },
    { value: "devops", label: "DevOps & Cloud" },
    { value: "product", label: "Product Management" },
    { value: "other", label: "Outro" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Por favor, insira seu nome");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Por favor, insira seu email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return false;
    }

    if (!formData.interest) {
      toast.error("Por favor, selecione uma área de interesse");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store data in localStorage for demonstration
      const registrations = JSON.parse(
        localStorage.getItem("registrations") || "[]"
      );
      registrations.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("registrations", JSON.stringify(registrations));

      setIsSuccess(true);
      toast.success("Inscrição realizada com sucesso!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        interest: "",
      });

      // Close modal after 2 seconds if provided
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Inscrição Confirmada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Obrigado por se inscrever no Maratona Tech Itararé. Você receberá um
          email de confirmação em breve.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            if (onClose) onClose();
          }}
          className="bg-primary hover:bg-primary/90"
        >
          Fechar
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-display font-semibold">
          Nome Completo
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange}
          className="border-border bg-background/50 focus:bg-background transition-colors"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-display font-semibold">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu.email@exemplo.com"
          value={formData.email}
          onChange={handleInputChange}
          className="border-border bg-background/50 focus:bg-background transition-colors"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest" className="font-display font-semibold">
          Área de Interesse
        </Label>
        <Select value={formData.interest} onValueChange={handleSelectChange}>
          <SelectTrigger
            id="interest"
            className="border-border bg-background/50 focus:bg-background transition-colors"
            disabled={isSubmitting}
          >
            <SelectValue placeholder="Selecione uma área" />
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg py-3 transition-all duration-300 hover:shadow-lg"
      >
        {isSubmitting ? "Processando..." : "Inscrever-se"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Seus dados serão usados apenas para comunicações sobre o evento.
      </p>
    </form>
  );
}
