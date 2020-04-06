import React from 'react';
import PropTypes from 'prop-types';

import { Container, ItemsContainer, Item } from './styles';
import Button from '~/components/Button';
import { purple, white } from '~/styles/colors';

export default function Options({ history }) {
  return (
    <Container>
      <ItemsContainer>
        <Item>
          <strong>
            Tem alguma habilidade ou conhecimento que quer compartilhar?
          </strong>
          <span>
            Preencha o formulário com suas principais habilidades e
            encontraremos alguém que está procurando por você.
          </span>
          <Button
            background="transparent"
            backgroundWhenHover={purple}
            fontColorWhenHover={white}
            width="210px"
            height="70px"
            borderColor={purple}
            fontColor={purple}
            onClick={() => history.push('/registrar')}
          >
            <span>Inscreva-se</span>
          </Button>
        </Item>
        <Item>
          <strong>
            Está a procura de alguém com uma habilidade específica?
          </strong>
          <span>
            Nesse exato momento tem algúem que pode te ajudar! Preencha o
            formulário com o que você precisa.
          </span>
          <Button
            background="transparent"
            backgroundWhenHover={purple}
            fontColorWhenHover={white}
            width="200px"
            height="70px"
            borderColor={purple}
            fontColor={purple}
          >
            <span>Procurar</span>
          </Button>
        </Item>
      </ItemsContainer>
    </Container>
  );
}

Options.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
