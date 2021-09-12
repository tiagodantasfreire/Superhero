import React, { useState, useEffect, createContext } from 'react';

import Superhero from '../Superhero';

export const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const loadHeroes = async () => {
      const heroesList = await Superhero.getHeroes();
      setHeroes(heroesList);
    };

    loadHeroes();
  }, []);

  const setSelectedHero = (hero) => {
    setSelected([...selected, hero]);
  };

  return (
    <HeroContext.Provider value={{ heroes, setSelectedHero }}>
      {children}
    </HeroContext.Provider>
  )
};

export default HeroProvider;
