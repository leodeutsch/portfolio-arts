import emailjs from "@emailjs/browser";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  private initialized = false;

  private constructor() {}

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  init(publicKey: string) {
    if (!this.initialized) {
      emailjs.init(publicKey);
      this.initialized = true;
    }
  }

  async sendContactEmail(
    data: EmailData,
    serviceId: string,
    templateId: string,
    recipientEmail: string
  ): Promise<void> {
    // Validação básica
    if (!this.validateEmail(data.email)) {
      throw new Error("Email inválido");
    }

    if (data.message.length < 10) {
      throw new Error("Mensagem muito curta");
    }

    const templateParams = {
      to_email: recipientEmail,
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      message: data.message.trim(),
      // Adicionar mais campos se necessário
      sent_date: new Date().toLocaleDateString("pt-BR"),
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error("Falha ao enviar email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      throw new Error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Hook customizado para uso no React
import { useCallback, useState } from "react";

export const useEmailService = (config: {
  serviceId: string;
  templateId: string;
  publicKey: string;
  recipientEmail: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const emailService = EmailService.getInstance();
  emailService.init(config.publicKey);

  const sendEmail = useCallback(
    async (data: EmailData) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      try {
        await emailService.sendContactEmail(
          data,
          config.serviceId,
          config.templateId,
          config.recipientEmail
        );
        setSuccess(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    },
    [config, emailService]
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { sendEmail, isLoading, error, success, reset };
};
