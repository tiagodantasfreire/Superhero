import React, { useContext } from 'react';

import { HeroContext } from "../../contexts/heroContext";

import Hero from '../Hero';
import Loader from '../Loader';

// import * as S from  './styled';

const HeroList = () => {
  const { heroes } = useContext(HeroContext);
  console.log(heroes);

  return heroes.length === 0 ? <Loader /> : (
    heroes.map(({ hero }) => <Hero key={hero.id} hero={hero} />)
  );
};

export default HeroList;