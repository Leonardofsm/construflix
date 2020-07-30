import React from 'react';
import Menu from './components/Menu';
import dados_Iniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #00000096;
`;


function App() {
  return (
    <div >
      <AppWrapper>
      <Menu />

      <BannerMain 
        videoTitle={dados_Iniciais.categorias[0].videos[0].titulo}
        url={dados_Iniciais.categorias[0].videos[0].url}
        videoDescription={"Oque um front=end faz ?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_Iniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_Iniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_Iniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_Iniciais.categorias[3]}
      />

      <Footer />

      </AppWrapper>
    </div>
  );
}

export default App;
