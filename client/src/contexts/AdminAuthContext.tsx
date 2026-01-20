/**
 * Admin Authentication Context
 * - Gerencia autenticação do painel administrativo
 * - Armazena estado de login e credenciais
 */

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

// Senha padrão para admin (em produção, usar autenticação real)
const ADMIN_PASSWORD = "maratona2026";

export function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar se já está autenticado ao carregar
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminToken", "authenticated");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}
