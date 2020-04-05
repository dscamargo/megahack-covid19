import styled from 'styled-components';
import { white, purple, optionTextColor } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  width: 80%;
  display: flex;
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  :first-child {
    border-right: 1px solid ${purple};
  }

  :last-of-type {
    padding: 0 0 0 100px;
  }

  > strong {
    width: 100%;
    font-size: 30px;
    color: ${purple};
    margin-bottom: 20px;
  }

  > span {
    font-size: 24px;
    color: ${optionTextColor};
    margin-bottom: 40px;
  }
`;
