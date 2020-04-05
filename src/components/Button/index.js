import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { purple, white } from '~/styles/colors';

export default function Button({
  width,
  height,
  background,
  fontColor,
  borderColor,
  backgroundWhenHover,
  fontColorWhenHover,
  children,
  ...props
}) {
  return (
    <Container
      background={background}
      height={height}
      backgroundWhenHover={backgroundWhenHover}
      fontColorWhenHover={fontColorWhenHover}
      width={width}
      fontColor={fontColor}
      borderColor={borderColor}
      {...props}
    >
      {children}
    </Container>
  );
}

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  background: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundWhenHover: PropTypes.string,
  fontColorWhenHover: PropTypes.string,
};

Button.defaultProps = {
  width: '100%',
  fontColor: white,
  borderColor: white,
  fontColorWhenHover: purple,
  backgroundWhenHover: white,
  background: purple,
  height: '70px',
};
