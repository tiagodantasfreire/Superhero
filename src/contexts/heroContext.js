import React, { useState, useEffect, createContext, useCallback } from 'react';

import Superhero from '../Superhero';

export const HeroContext = createContext();


const HeroProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState({}) 

  useEffect(() => {
    const loadHeroes = async () => {
      const heroesList = await Superhero.getHeroes();
      setHeroes(heroesList);
    };

    loadHeroes();
  }, []);

  const setHero = useCallback((hero) => {
    if (Object.keys(selectedHero).length >= 2) {
      console.log('Heróis já selecionados');
    } else {
      setSelectedHero({
        ...selectedHero,
        [hero.name]: hero,
      });
    }
  }, [selectedHero]);

  return (
    <HeroContext.Provider value={{ heroes, setHero, selectedHero }}>
      {children}
    </HeroContext.Provider>
  )
};

export default HeroProvider;
