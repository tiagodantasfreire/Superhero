import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  width: auto;
`;

export const HeroImageWrapper = styled.div`
  width: 12rem;
  height: 17rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1;
  `;

export const HeroImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid;
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

export const HeroStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem 1rem;
  width: 10rem;
  height: 16rem;
  border: 1px solid;
  border-radius: 1rem;
  width: 10rem;
  height: 16rem;
  transition: margin 0.6s ease-in-out;
  background: linear-gradient(#b3c5df 0%, #ebf4f5 100%) no-repeat;
`;

export const HeroStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: flex-end;
`;

export const PercentageWrapper = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid;
  background-color: #fff;
  
  span {
    display: flex;
    align-items: center;
    padding-left: 5px;
    height: 100%;
    border-radius: 1rem;
    max-width: calc(100% - 5px);
  }
`;
