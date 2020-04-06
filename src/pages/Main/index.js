import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from './assets/MainBanner.png';

import Button from '~/components/Button';

import {
  Container,
  TextContainer,
  ImageContainer,
  Text,
  Title,
  Resume,
} from './styles';

export default function Main({ history }) {
  return (
    <Container>
      <TextContainer>
        <Text>
          <Title>
            <h1>Você fica em casa.</h1>
            <h1>Suas habilidades, não.</h1>
          </Title>
          <Resume>
            <span>
              Encontre pessoas que precisam do que você faz de melhor e garanta
              uma renda extra mesmo durante a quarentena.
            </span>
          </Resume>
          <Button onClick={() => history.push('/escolher')} width="215px">
            <span>Cadastre-se</span>
          </Button>
        </Text>
      </TextContainer>
      <ImageContainer>
        <img src={BackgroundImage} alt="Banner Inicial" />
      </ImageContainer>
      <div style={{ width: 0.5 }} />
    </Container>
  );
}

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
