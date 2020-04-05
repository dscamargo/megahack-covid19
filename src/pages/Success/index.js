import React from 'react';

import { Container, Content } from './styles';

export default function Success() {
  return (
    <Container>
      <Content>
        <strong>Agora é só aguardar!</strong>
        <span>
          Vamos procurar algúem que esteja procurando as suas habilidades. Ela
          irá entrar em contato pelo telefone que você preencheu no seu
          cadastro.
        </span>

        <span>A partir daí, basta acertar os detalhes entre vocês.</span>
      </Content>
    </Container>
  );
}
