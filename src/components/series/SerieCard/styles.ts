import styled from "styled-components";

export const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: auto; // Changed from fixed height to auto
  object-fit: cover;
  display: block;
  background-color: ${({ theme }) => theme.colors.background[200]};
`;

export const SerieInfo = styled.div`
  padding: 1rem;
`;

export const SerieName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

export const ArtworkCount = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const ViewButton = styled.span`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
