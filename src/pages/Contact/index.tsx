import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Copyright } from "../../components/copyright";
import { contactConfig } from "../../config/contact";
import { emailConfig } from "../../config/emailjs";
import { useLanguage } from "../../hooks/useLanguage";
import EmailIcon from "../../images/envelope.png";
import InstagramIcon from "../../images/instagram.png";
import WhatsAppIcon from "../../images/whatsapp.png";
import * as S from "./styles";

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: contactConfig.email,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    // Opção de copiar email para clipboard
    navigator.clipboard.writeText(contactConfig.email).then(() => {
      setShowCopiedTooltip(true);
      setTimeout(() => setShowCopiedTooltip(false), 2000);
    });
  };

  const handleWhatsAppClickMain = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu portfólio e gostaria de conversar sobre suas obras."
    );
    window.open(
      `https://wa.me/${contactConfig.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const handleWhatsAppClickSecondary = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu portfólio e gostaria de conversar sobre suas obras."
    );
    window.open(
      `https://wa.me/${contactConfig.whatsappSecondary}?text=${message}`,
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${contactConfig.instagram}`, "_blank");
  };

  return (
    <S.ContactContainer>
      <S.ContactContent>
        <S.Title>{t("contact.title")}</S.Title>

        <S.FormSection>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="name">{t("contact.name")}</S.Label>
              <S.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("contact.namePlaceholder") || "Seu nome"}
                required
                disabled={isSubmitting}
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="email">{t("contact.email")}</S.Label>
              <S.Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={
                  t("contact.emailPlaceholder") || "seu.email@exemplo.com"
                }
                required
                disabled={isSubmitting}
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="message">{t("contact.message")}</S.Label>
              <S.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={
                  t("contact.messagePlaceholder") || "Sua mensagem..."
                }
                rows={6}
                required
                disabled={isSubmitting}
              />
            </S.FormGroup>

            <S.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </S.SubmitButton>

            {submitStatus === "success" && (
              <S.SuccessMessage>{t("contact.success")}</S.SuccessMessage>
            )}

            {submitStatus === "error" && (
              <S.ErrorMessage>{t("contact.error")}</S.ErrorMessage>
            )}
          </S.Form>
        </S.FormSection>

        <S.ContactInfo>
          <S.InfoTitle>{t("contact.contactInformation")}</S.InfoTitle>

          <S.ContactItem onClick={handleEmailClick}>
            <S.IconWrapper>
              <img
                alt="Email"
                src={EmailIcon}
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconWrapper>
            <S.ContactDetails>
              <S.ContactLabel>Email</S.ContactLabel>
              <S.ContactValue>{contactConfig.email}</S.ContactValue>
              {showCopiedTooltip && (
                <S.Tooltip>{t("contact.copied")}</S.Tooltip>
              )}
            </S.ContactDetails>
          </S.ContactItem>

          <S.ContactItem onClick={handleWhatsAppClickMain}>
            <S.IconWrapper>
              <img
                alt="WhatsApp - Artista"
                src={WhatsAppIcon}
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconWrapper>
            <S.ContactDetails>
              <S.ContactLabel>WhatsApp</S.ContactLabel>
              <S.ContactValue>{t("contact.sendMessage")}</S.ContactValue>
            </S.ContactDetails>
          </S.ContactItem>

          <S.ContactItem onClick={handleWhatsAppClickSecondary}>
            <S.IconWrapper>
              <img
                alt="WhatsApp - Assessoria"
                src={WhatsAppIcon}
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconWrapper>
            <S.ContactDetails>
              <S.ContactLabel>WhatsApp</S.ContactLabel>
              <S.ContactValue>
                {t("contact.sendMessageSecondary")}
              </S.ContactValue>
            </S.ContactDetails>
          </S.ContactItem>

          <S.ContactItem onClick={handleInstagramClick}>
            <S.IconWrapper>
              <img
                alt="Instagram"
                src={InstagramIcon}
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconWrapper>
            <S.ContactDetails>
              <S.ContactLabel>Instagram</S.ContactLabel>
              <S.ContactValue>@{contactConfig.instagram}</S.ContactValue>
            </S.ContactDetails>
          </S.ContactItem>
        </S.ContactInfo>

        <Copyright />
      </S.ContactContent>
    </S.ContactContainer>
  );
};
