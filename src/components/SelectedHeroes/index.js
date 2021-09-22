import React, { useState, useEffect, useContext } from 'react';

import { HeroContext } from '../../contexts/heroContext';

import Hero from '../Hero';
import NotSelected from './components/NotSelected';

import * as S from './styled';

const SelectedHeroes = () => {
  const [isAllHeroesSelected, setIsAllHeroesSelected] = useState(false)
  const { selectedHeroes } = useContext(HeroContext);
  const heroes = Object.values(selectedHeroes);

  useEffect(() => {
    if (selectedHeroes[1]) {
      setIsAllHeroesSelected(true);
    }
  }, [selectedHeroes]);


  const compareHeroes = () => {
    console.log('comparando...')
  };

  if (heroes.length === 0) return null;

  return (
    <S.SelectedHeroesWrapper>
      <S.SelectedHeroes>
          {selectedHeroes[0] ? <Hero key={heroes[0].id} hero={heroes[0]} /> : <NotSelected />}
          {selectedHeroes[1] ? <Hero key={heroes[1].id} hero={heroes[1]} /> : <NotSelected />}
      </S.SelectedHeroes>
      <S.CompareButton isDisabled={!isAllHeroesSelected} onClick={compareHeroes}>
        Compare
      </S.CompareButton>
    </S.SelectedHeroesWrapper>
  );
};

export default SelectedHeroes;
