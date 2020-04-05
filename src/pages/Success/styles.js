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
  flex-direction: column;
  width: 80%;

  > strong {
    color: ${white};
    font-size: 70px;
    margin-bottom: 20px;
    width: 100%;
  }

  > span {
    width: 50%;
    color: ${white};
    font-size: 30px;

    @media screen and (min-width: 1500px) {
      width: 40%;
    }

    :last-of-type {
      margin-top: 60px;
    }
  }
`;
