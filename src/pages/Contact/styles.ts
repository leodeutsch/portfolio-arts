import styled, { keyframes } from "styled-components";
import { media } from "../../styles/breakpoints";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactContainer = styled.main`
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.sizes.headerHeight} + 3rem) 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    padding: calc(${({ theme }) => theme.sizes.headerHeight} + 2rem) 1rem 2rem;
  }
`;

export const ContactContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  ${media.tablet} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const FormSection = styled.section`
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: 3rem;

  ${media.tablet} {
    padding: 2rem 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.default};
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${({ theme }) => theme.transitions.default};
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 1rem 3rem;
  background-color: #16a34a;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  transition: all ${({ theme }) => theme.transitions.default};
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background-color: #15803d;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${media.mobile} {
    align-self: stretch;
  }
`;

export const SuccessMessage = styled.p`
  color: #16a34a;
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;
  animation: ${fadeIn} 0.3s ease;
`;

export const ErrorMessage = styled.p`
  color: #dc2626;
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;
  animation: ${fadeIn} 0.3s ease;
`;

export const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  border-radius: 8px;
`;

export const EmailIcon = styled.span`
  font-size: 1.5rem;
`;

export const WhatsAppIcon = styled.span`
  font-size: 1.5rem;
`;

export const InstagramIcon = styled.span`
  font-size: 1.5rem;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.25rem;
`;

export const ContactValue = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
`;

export const Tooltip = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  animation: ${fadeIn} 0.2s ease;
`;
