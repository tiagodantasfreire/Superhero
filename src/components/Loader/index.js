import React from 'react';

import LoaderGif from  '../../assets/loader.gif';

import * as S from  './styled';

const Loader = () => (
  <S.LoaderWrapper>
    <img src={LoaderGif} alt="loading..." />
    <h1>Loading Heroes...</h1>
  </S.LoaderWrapper>
);

export default Loader;