import styled from 'styled-components';
import { white, purple, optionTextColor } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 65%;

  > strong {
    font-size: 30px;
    color: ${purple};
    margin-bottom: 40px;
  }

  > span {
    font-size: 24px;
    margin-bottom: 40px;
    color: ${optionTextColor};
  }

  > form {
    margin-bottom: 20px;
    width: 500px;

    > div {
      margin-bottom: 20px;
    }
  }
`;

export const InputsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  > span {
    font-size: 12px;
    color: red;
  }
`;
