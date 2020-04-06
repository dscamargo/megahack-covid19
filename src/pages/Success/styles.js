import styled from 'styled-components';
import { purple, white } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* background: red; */

  > strong {
    color: ${white};
    font-size: 6.5vh;
    margin-bottom: 20px;
    width: 100%;
  }

  > span {
    width: 80%;
    color: ${white};
    font-size: 3.5vh;

    :last-of-type {
      margin-top: 60px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  /* background: black; */

  > img {
    width: 80%;
    height: 80%;
  }
`;
