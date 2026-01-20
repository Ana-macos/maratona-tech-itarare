/**
 * Admin Dashboard Page
 * - Tabela com todas as inscrições
 * - Funcionalidades de gerenciamento
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import AdminLogin from "@/components/AdminLogin";
import { LogOut, Download, Trash2, Edit2, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface Registration {
  name: string;
  email: string;
  interest: string;
  timestamp: string;
}

const interestLabels: Record<string, string> = {
  "web-dev": "Web Development",
  "mobile-dev": "Mobile Development",
  "ux-ui": "UX/UI Design",
  backend: "Backend Development",
  data: "Data & Analytics",
  devops: "DevOps & Cloud",
  product: "Product Management",
  other: "Outro",
};

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAdminAuth();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<Registration | null>(null);

  // Carregar inscrições do localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("registrations") || "[]");
    setRegistrations(stored);
  }, []);

  // Filtrar inscrições
  const filteredRegistrations = registrations.filter((reg) => {
    const matchesSearch =
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterInterest === "all" || reg.interest === filterInterest;
    return matchesSearch && matchesFilter;
  });

  // Deletar inscrição
  const handleDelete = (index: number) => {
    const newRegistrations = registrations.filter((_, i) => i !== index);
    setRegistrations(newRegistrations);
    localStorage.setItem("registrations", JSON.stringify(newRegistrations));
    toast.success("Inscrição deletada com sucesso");
  };

  // Editar inscrição
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditData({ ...registrations[index] });
  };

  // Salvar edição
  const handleSaveEdit = () => {
    if (editingIndex !== null && editData) {
      const newRegistrations = [...registrations];
      newRegistrations[editingIndex] = editData;
      setRegistrations(newRegistrations);
      localStorage.setItem("registrations", JSON.stringify(newRegistrations));
      setEditingIndex(null);
      setEditData(null);
      toast.success("Inscrição atualizada com sucesso");
    }
  };

  // Cancelar edição
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditData(null);
  };

  // Exportar para CSV
  const handleExport = () => {
    if (registrations.length === 0) {
      toast.error("Nenhuma inscrição para exportar");
      return;
    }

    const headers = ["Nome", "Email", "Área de Interesse", "Data/Hora"];
    const csvContent = [
      headers.join(","),
      ...registrations.map((reg) =>
        [
          `"${reg.name}"`,
          `"${reg.email}"`,
          `"${interestLabels[reg.interest] || reg.interest}"`,
          `"${new Date(reg.timestamp).toLocaleString("pt-BR")}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `inscricoes_maratona_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Inscrições exportadas com sucesso");
  };

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b border-border">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Painel Administrativo
              </h1>
              <p className="text-muted-foreground mt-1">
                Gerenciamento de inscrições - Maratona Tech Itararé
              </p>
            </div>
            <Button
              onClick={logout}
              variant="outline"
              className="gap-2 border-border hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Inscrições
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {registrations.length}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Inscrições Filtradas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {filteredRegistrations.length}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Taxa de Ocupação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {registrations.length > 0
                  ? Math.round((registrations.length / 70) * 100)
                  : 0}
                %
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                de 70 vagas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="border-border mb-6">
          <CardHeader>
            <CardTitle>Filtros e Ações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Search */}
              <div className="space-y-2">
                <Label htmlFor="search" className="font-semibold">
                  Buscar
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Nome ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-border bg-background/50"
                  />
                </div>
              </div>

              {/* Filter by Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest" className="font-semibold">
                  Área de Interesse
                </Label>
                <Select value={filterInterest} onValueChange={setFilterInterest}>
                  <SelectTrigger
                    id="interest"
                    className="border-border bg-background/50"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as áreas</SelectItem>
                    {Object.entries(interestLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Export Button */}
              <div className="flex items-end">
                <Button
                  onClick={handleExport}
                  className="w-full bg-primary hover:bg-primary/90 gap-2"
                >
                  <Download className="h-4 w-4" />
                  Exportar CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Inscrições ({filteredRegistrations.length})</CardTitle>
            <CardDescription>
              Visualize e gerencie todas as inscrições do hackathon
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredRegistrations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhuma inscrição encontrada
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Área de Interesse</TableHead>
                      <TableHead>Data/Hora</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRegistrations.map((reg, index) => {
                      const actualIndex = registrations.indexOf(reg);
                      const isEditing = editingIndex === actualIndex;

                      return (
                        <TableRow key={index} className="border-border">
                          {isEditing && editData ? (
                            <>
                              <TableCell>
                                <Input
                                  value={editData.name}
                                  onChange={(e) =>
                                    setEditData({
                                      ...editData,
                                      name: e.target.value,
                                    })
                                  }
                                  className="h-8 border-border"
                                />
                              </TableCell>
                              <TableCell>
                                <Input
                                  value={editData.email}
                                  onChange={(e) =>
                                    setEditData({
                                      ...editData,
                                      email: e.target.value,
                                    })
                                  }
                                  className="h-8 border-border"
                                />
                              </TableCell>
                              <TableCell>
                                <Select
                                  value={editData.interest}
                                  onValueChange={(value) =>
                                    setEditData({
                                      ...editData,
                                      interest: value,
                                    })
                                  }
                                >
                                  <SelectTrigger className="h-8 border-border">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {Object.entries(interestLabels).map(
                                      ([value, label]) => (
                                        <SelectItem key={value} value={value}>
                                          {label}
                                        </SelectItem>
                                      )
                                    )}
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {new Date(editData.timestamp).toLocaleString(
                                  "pt-BR"
                                )}
                              </TableCell>
                              <TableCell className="text-right space-x-2">
                                <Button
                                  onClick={handleSaveEdit}
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90 h-8"
                                >
                                  Salvar
                                </Button>
                                <Button
                                  onClick={handleCancelEdit}
                                  size="sm"
                                  variant="outline"
                                  className="h-8 border-border"
                                >
                                  Cancelar
                                </Button>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="font-medium">
                                {reg.name}
                              </TableCell>
                              <TableCell>{reg.email}</TableCell>
                              <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                  {interestLabels[reg.interest] ||
                                    reg.interest}
                                </span>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {new Date(reg.timestamp).toLocaleString(
                                  "pt-BR"
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    onClick={() => handleEdit(actualIndex)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 w-8 p-0 hover:bg-primary/10"
                                  >
                                    <Edit2 className="h-4 w-4 text-primary" />
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(actualIndex)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 w-8 p-0 hover:bg-destructive/10"
                                  >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
