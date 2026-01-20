/**
 * Registration Modal Component - Organic Tech Fusion Design
 * - Modal dialog for registration form
 * - Smooth animations and backdrop
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RegistrationForm from "./RegistrationForm";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Inscreva-se no Maratona Tech Itararé
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <RegistrationForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
