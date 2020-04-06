import styled from 'styled-components';
import { purple, white } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${purple};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TextContainer = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 90%;
  padding: 20px 40px;
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 20px;

  > h1 {
    font-weight: 600;
    color: ${white};
    font-size: 6vh;
    text-align: left;
  }
`;
export const Resume = styled.div`
  margin-bottom: 60px;

  > span {
    color: ${white};
    font-size: 4vh;
    text-align: left;
    font-weight: 400;
  }
`;

export const ImageContainer = styled.section`
  width: 50%;
  background: ${purple};
  display: flex;
  justify-content: flex-end;
  position: relative;

  > img {
    position: absolute;
    top: -69px;
    width: 80%;
    height: 115%;
  }
`;
