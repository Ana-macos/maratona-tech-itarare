/**
 * Email Service - Handles sending confirmation emails
 * Uses a simulated email service for demonstration
 * In production, integrate with SendGrid, Mailgun, or similar
 */

interface EmailData {
  name: string;
  email: string;
}

/**
 * Send confirmation email to participant
 * In production, this would call a backend API endpoint
 */
export async function sendConfirmationEmail(data: EmailData): Promise<boolean> {
  try {
    // Simulate email sending with a delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would call your backend API:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: data.email,
    //     name: data.name,
    //     template: 'registration-confirmation'
    //   })
    // });
    // return response.ok;

    // For now, we'll simulate success and log to console
    console.log(`[EMAIL SERVICE] Confirmation email sent to ${data.email}`);
    console.log(`Email content: Registration confirmation for ${data.name}`);

    // Store email log in localStorage for demonstration
    const emailLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
    emailLogs.push({
      to: data.email,
      name: data.name,
      timestamp: new Date().toISOString(),
      subject: "Confirmação de Inscrição - Maratona Tech Itararé",
      status: "sent",
    });
    localStorage.setItem("emailLogs", JSON.stringify(emailLogs));

    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}

/**
 * Generate confirmation email HTML template
 */
export function generateConfirmationEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Bem-vindo ao Maratona Tech Itararé!</h1>
          </div>
          <div class="content">
            <p>Olá <strong>${data.name}</strong>,</p>
            <p>Sua inscrição no Maratona Tech Itararé foi confirmada com sucesso!</p>
            <p>Estamos entusiasmados em ter você conosco nesta jornada de inovação e colaboração para transformar o turismo em Itararé através da tecnologia.</p>
            
            <h3>Próximos Passos:</h3>
            <ul>
              <li>Fique atento aos emails com atualizações sobre o evento</li>
              <li>Acesse o site para conhecer os desafios e mentores</li>
              <li>Forme sua equipe ou encontre parceiros na comunidade</li>
              <li>Prepare-se para o início do hackathon em 10 de Abril</li>
            </ul>

            <p><strong>Informações do Evento:</strong></p>
            <ul>
              <li><strong>Data:</strong> 10-13 de Abril, 2026</li>
              <li><strong>Local:</strong> Itararé, São Paulo</li>
              <li><strong>Vagas:</strong> 70 participantes em 12 grupos</li>
              <li><strong>Prêmio:</strong> R$ 18.000 em premiação</li>
            </ul>

            <p>Se tiver dúvidas, consulte nossa seção de FAQ ou entre em contato conosco.</p>

            <a href="https://maratonatechitarare.com.br" class="button">Acessar Site do Evento</a>

            <div class="footer">
              <p>© 2026 Maratona Tech Itararé - Turismo e Inovação</p>
              <p>contato@maratonatechitarare.com.br</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
