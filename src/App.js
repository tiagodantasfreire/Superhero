import React from "react";

import HeroProvider from './contexts/heroContext';

import Header from "./components/Header";
import HeroList from "./components/HeroList";

import * as S from "./styled";
import "./main.css";

const App = () => {
  return (
    <HeroProvider>
      <Header />
      <S.HeroesWrapper>
        <HeroList />
      </S.HeroesWrapper>
    </HeroProvider>
  );
};

export default App;
