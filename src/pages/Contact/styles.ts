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
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  ${media.tablet} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const FormSection = styled.section`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 4rem;

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
  gap: 2rem;
  padding-inline: 20%;
`;

export const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.2rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
  }

  ${media.mobile} {
    padding: 1.5rem 1rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 0.5rem;

  ${media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ContactLabel = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
  font-size: 0.9rem;

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

export const ContactValue = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  margin: 0;
  word-break: break-all;

  ${media.mobile} {
    font-size: 0.8rem;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  animation: ${fadeIn} 0.2s ease;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.secondary};
  }
`;
