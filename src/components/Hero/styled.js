import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  flex-wrap: wrap;
`;

export const HeroImage = styled.img`
  width: 12rem;
  border-radius: 1rem;
`;

export const HeroName = styled.p`
  position: absolute;
  color: #fff;
  bottom: 0.5rem;
  background-color: rgba(0, 0, 0, .8);
  padding: .5rem;
  border-radius: 0.5rem;
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  font-size: 1.1rem;
`;
