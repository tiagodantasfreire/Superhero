import React, { useContext } from 'react';

import { HeroContext } from "../../contexts/heroContext";

import Hero from '../Hero';
import Loader from '../Loader';

import * as S from  './styled';

const HeroList = () => {
  const { heroes, selectedHero } = useContext(HeroContext);
  console.log(selectedHero);

  const marvelHeroes = heroes.filter((hero) => hero.from === 'Marvel');
  const dcHeroes = heroes.filter((hero) => hero.from === 'DC');

  return heroes.length === 0 ? <Loader /> : (
    <>
      <S.HeroListWrapper>
        <S.HeroesTitle>Marvel</S.HeroesTitle>
        <S.HeroesWrapper>
          {marvelHeroes.map(({ hero }) => (
            <Hero key={hero.id} hero={hero} />
            ))}
        </S.HeroesWrapper>
      </S.HeroListWrapper>
      <S.HeroListWrapper>
        <S.HeroesTitle>DC</S.HeroesTitle>
        <S.HeroesWrapper>
          {dcHeroes.map(({ hero }) => (
            <Hero key={hero.id} hero={hero} />
            ))}
        </S.HeroesWrapper>
      </S.HeroListWrapper>
    </>
  );
};

export default HeroList;