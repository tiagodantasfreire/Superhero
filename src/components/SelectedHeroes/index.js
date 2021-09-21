import React, { useContext } from 'react';

import { HeroContext } from '../../contexts/heroContext';

import Hero from '../Hero';

import * as S from './styled';

const SelectedHeroes = () => {
  const { selectedHeroes } = useContext(HeroContext);
  const heroes = Object.values(selectedHeroes);

  const compareHeroes = () => {
    console.log('comparando...')
  };

  if (heroes.length === 0) return null;

  return (
    <S.SelectedHeroesWrapper>
      <S.SelectedHeroes>
        {heroes.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </S.SelectedHeroes>
      <button onClick={compareHeroes}>Compare</button>
    </S.SelectedHeroesWrapper>
  );
};

export default SelectedHeroes;
