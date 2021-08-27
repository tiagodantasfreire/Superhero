import React, { useState, useEffect } from 'react';

import Superhero from './Superhero';

import Header from './components/Header';
import Hero from './components/Hero';

import * as S from './styled';
import './main.css';

const App = () => {
  const [marvel] = useState([]);
  const [dc] = useState([]);
  
  useEffect(() => {
    const loadHeroes = async () => {
      const list = await Superhero.getHeroes();

      list.map((hero) => {
        return hero.from === 'Marvel' ? marvel.push(hero) : dc.push(hero);
      });
    };

    loadHeroes();
  }, [marvel, dc]);
  
  return (
    <>
      <Header />
      <S.HeroesWrapper>
        {marvel.length === 0 & dc.length === 0 ? <p>Loading Heroes...</p> : 
          <>
            <S.HeroListWrapper>
              <S.HeroesTitle>{marvel[0].from}</S.HeroesTitle>
              <S.HeroWrapper>
                <Hero heroList={marvel} />
              </S.HeroWrapper>
            </S.HeroListWrapper>
            <S.HeroListWrapper>
              <S.HeroesTitle>{dc[0].from}</S.HeroesTitle>
              <S.HeroWrapper>
                <Hero heroList={dc} />
              </S.HeroWrapper>
            </S.HeroListWrapper>
          </>
        }
      </S.HeroesWrapper>
    </>
  );
}

export default App;
