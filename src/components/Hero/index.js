import React from "react";

import * as S from "./styled";

const Hero = ({ heroList }) =>  {
  const toggleStats = (id) => {
    const stats = document.getElementById(`${id}`).style;
    stats.marginLeft === '-193px' ? stats.marginLeft = '-22px' : stats.marginLeft = '-193px';
  };

  return (
    <>
      {heroList.map(({ hero }) => {
        return hero !== undefined && (
          <S.HeroWrapper key={hero?.id}>
            <S.HeroImageWrapper onClick={() => toggleStats(hero?.id)}>
              <S.HeroImage src={hero?.image?.url} alt={hero?.name} />
              <S.HeroName>{hero?.name}</S.HeroName>
            </S.HeroImageWrapper>
            <S.HeroStatsWrapper
              id={hero.id}
              style={{ marginLeft: '-193px' }}
            >
              <S.HeroStats>
                <p>Combat:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#ff2d2d', width: `${hero?.powerstats?.combat}%` }}>
                    {hero?.powerstats?.combat}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
              <S.HeroStats>
                <p>durability:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#ffa500', width: `${hero?.powerstats?.durability}%` }}>
                    {hero?.powerstats?.durability}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
              <S.HeroStats>
                <p>intelligence:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#4bb4da', width: `${hero?.powerstats?.intelligence}%` }}>
                    {hero?.powerstats?.intelligence}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
              <S.HeroStats>
                <p>power:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#fdd700', width: `${hero?.powerstats?.power}%` }}>
                    {hero?.powerstats?.power}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
              <S.HeroStats>
                <p>speed:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#861786', width: `${hero?.powerstats?.speed}%` }}>
                    {hero?.powerstats?.speed}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
              <S.HeroStats>
                <p>strength:</p>
                <S.PercentageWrapper>
                  <span style={{ backgroundColor: '#6b6b6b', width: `${hero?.powerstats?.strength}%` }}>
                    {hero?.powerstats?.strength}
                  </span>
                </S.PercentageWrapper>
              </S.HeroStats>
            </S.HeroStatsWrapper>
          </S.HeroWrapper>
        )
      })}
    </>
  );
}

export default Hero;
