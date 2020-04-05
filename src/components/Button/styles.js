import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => props.background};
  border: 2px solid ${props => props.borderColor};
  border-radius: 34px;
  font-size: 20px;
  color: ${props => props.fontColor};
  text-decoration: none;
  cursor: pointer;
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${props => props.backgroundWhenHover};
    color: ${props => props.fontColorWhenHover};
  }
`;
