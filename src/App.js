import React, { useState, useEffect } from "react";

import Superhero from "./Superhero";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from './components/Loader';

import * as S from "./styled";
import "./main.css";

const App = () => {
  const [marvel, setMarvel] = useState([]);
  const [dc, setDc] = useState([]);

  useEffect(() => {
    const loadHeroes = async () => {
      const heroesList = await Superhero.getHeroes();

      const marvelHeroes = heroesList.map((hero) => hero.from === "Marvel" && hero);
      const dcHeroes = heroesList.map((hero) => hero.from === "DC" && hero);

      setMarvel(marvelHeroes);
      setDc(dcHeroes);
    };

    loadHeroes();
  }, [marvel, dc]);

  return (
    <>
      <Header />
      <S.HeroesWrapper>
        {(marvel.length === 0) & (dc.length === 0) ? (
          <Loader />
        ) : (
          <>
            <S.HeroListWrapper>
              <S.HeroesTitle>Marvel</S.HeroesTitle>
              <S.HeroWrapper>
                <Hero heroList={marvel} />
              </S.HeroWrapper>
            </S.HeroListWrapper>
            <S.HeroListWrapper>
              <S.HeroesTitle>DC</S.HeroesTitle>
              <S.HeroWrapper>
                <Hero heroList={dc} />
              </S.HeroWrapper>
            </S.HeroListWrapper>
          </>
        )}
      </S.HeroesWrapper>
    </>
  );
};

export default App;
