import React, { useState } from 'react';
import PropType from 'prop-types';

import { Container, Label } from './styles';

export default function Input({
  type,
  value,
  setValue,
  width,
  label,
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
      <input
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
  width: PropType.string,
  type: PropType.string,
  value: PropType.string,
  setValue: PropType.func,
  label: PropType.string,
};

Input.defaultProps = {
  label: '',
  setValue: () => {},
  value: '',
  type: 'text',
  width: '100px',
};
