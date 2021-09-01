import React from "react";

import * as S from "./styled";

const Hero = ({ heroList }) => (
  <>
    {heroList.map(({ hero }) => {
      return hero !== undefined && (
        <S.HeroWrapper key={hero?.id}>
          <S.HeroImage src={hero?.image?.url} alt={hero?.name} />
          <S.HeroName>{hero?.name}</S.HeroName>
        </S.HeroWrapper>
      )
    })}
  </>
);

export default Hero;
