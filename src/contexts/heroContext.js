import React, { useState, useEffect, createContext, useCallback } from 'react';

import Superhero from '../Superhero';

export const HeroContext = createContext();


const HeroProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState({}) 

  useEffect(() => {
    const loadHeroes = async () => {
      const heroesList = await Superhero.getHeroes();
      setHeroes(heroesList);
    };

    loadHeroes();
  }, []);

  const setHero = useCallback((hero) => {
    if (Object.keys(selectedHeroes).length >= 2) {
      console.log('Heróis já selecionados');
    } else {
      setSelectedHeroes({
        ...selectedHeroes,
        [hero.name]: hero,
      });
    }
  }, [selectedHeroes]);

  return (
    <HeroContext.Provider value={{ heroes, setHero, selectedHeroes }}>
      {children}
    </HeroContext.Provider>
  )
};

export default HeroProvider;
