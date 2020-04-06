import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

import { Container, Label } from './styles';

export default function Input({
  type,
  value,
  setValue,
  width,
  label,
  mask,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputIsFocused() {
    setIsFocused(true);
  }
  function handleInputIsBlur() {
    setIsFocused(false);
  }

  return (
    <Container width={width} {...props}>
      <MaskedInput
        mask={mask}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={handleInputIsBlur}
        onFocus={handleInputIsFocused}
      />
      <Label
        onClick={handleInputIsFocused}
        isFocused={isFocused}
        haveValue={!!value}
      >
        {label}
      </Label>
    </Container>
  );
}

Input.propTypes = {
  width: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  mask: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  setValue: () => {},
  value: '',
  type: 'text',
  width: '100px',
};
