import styled from 'styled-components';
import { purple, white } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  position: relative;

  > textarea {
    width: 100%;
    height: 45px;
    border: 1px solid ${purple};
    border-radius: 5px;
    padding: 15px 10px 0px 10px;
    font-size: 16px;
    color: ${purple};
    resize: vertical;
    min-height: 140px;
  }
`;

export const Label = styled.span`
  width: auto;
  background: ${white};
  color: ${purple};
  position: absolute;
  top: ${props => (props.haveValue || props.isFocused ? -5 : 14)}px;
  left: ${props => (props.haveValue || props.isFocused ? 14 : 14)}px;
  transition: 0.4s;
`;
