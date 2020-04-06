import React from 'react';

import SucessoImage from './assets/Success.png';

import { Container, Content, TextContainer, ImageContainer } from './styles';

export default function Success() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <strong>Agora é só aguardar!</strong>
          <span>
            Vamos procurar algúem que esteja procurando as suas habilidades. Ela
            irá entrar em contato pelo telefone que você preencheu no seu
            cadastro.
          </span>

          <span>A partir daí, basta acertar os detalhes entre vocês.</span>
        </TextContainer>
        <ImageContainer>
          <img src={SucessoImage} alt="Formulário completo" />
        </ImageContainer>
      </Content>
    </Container>
  );
}
