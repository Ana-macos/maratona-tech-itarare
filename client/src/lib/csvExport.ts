/**
 * CSV Export Service
 * Handles exporting registration data to CSV format
 */

interface RegistrationData {
  name: string;
  email: string;
  timestamp?: string;
}

/**
 * Convert array of registrations to CSV format
 */
export function convertToCSV(registrations: RegistrationData[]): string {
  if (registrations.length === 0) {
    return "Nome,Email,Data de Inscrição\n";
  }

  // CSV Header
  const headers = ["Nome", "Email", "Data de Inscrição"];
  const csvContent = [headers.join(",")];

  // CSV Rows
  registrations.forEach((registration) => {
    const date = registration.timestamp
      ? new Date(registration.timestamp).toLocaleString("pt-BR")
      : "N/A";

    const row = [
      `"${registration.name}"`,
      `"${registration.email}"`,
      `"${date}"`,
    ];
    csvContent.push(row.join(","));
  });

  return csvContent.join("\n");
}

/**
 * Download CSV file
 */
export function downloadCSV(
  registrations: RegistrationData[],
  filename: string = "inscritos-maratona-tech.csv"
): void {
  const csv = convertToCSV(registrations);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL
    URL.revokeObjectURL(url);
  }
}

/**
 * Generate CSV with statistics
 */
export function generateCSVWithStats(
  registrations: RegistrationData[]
): string {
  const csv = convertToCSV(registrations);

  // Add statistics
  const stats = [
    "",
    "ESTATÍSTICAS",
    `Total de Inscritos,${registrations.length}`,
    `Data de Exportação,"${new Date().toLocaleString("pt-BR")}"`,
  ];

  return csv + "\n" + stats.join("\n");
}

/**
 * Export registrations with statistics
 */
export function downloadCSVWithStats(
  registrations: RegistrationData[],
  filename: string = "inscritos-maratona-tech-com-stats.csv"
): void {
  const csv = generateCSVWithStats(registrations);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}
