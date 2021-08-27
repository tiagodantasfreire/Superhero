import React from "react";

import * as S from "./styled";

const Hero = ({ heroList }) => {
  return (
    <>
      {heroList.map(({ hero }) => (
        <S.HeroWrapper key={hero.id}>
          {console.log(hero)}
          <S.HeroImage src={hero.image.url} alt={hero.name} />
          <S.HeroName>{hero.name}</S.HeroName>
        </S.HeroWrapper>
      ))}
    </>
  );
};

export default Hero;
