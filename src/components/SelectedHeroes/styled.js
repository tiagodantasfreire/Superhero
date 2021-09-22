import styled from 'styled-components';

export const SelectedHeroesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedHeroes = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

export const CompareButton = styled.button`
  width: 50%;
  height: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  border: 1px solid;
  cursor: pointer;

  ${({ isDisabled }) => isDisabled && `
    cursor: not-allowed;
  `}
`;
