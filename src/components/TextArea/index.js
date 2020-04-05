import React, { useState } from 'react';
import PropType from 'prop-types';

import { Container, Label } from './styles';

export default function TextArea({ value, setValue, width, label, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputIsFocused() {
    setIsFocused(true);
  }
  function handleInputIsBlur() {
    setIsFocused(false);
  }

  return (
    <Container width={width} {...props}>
      <textarea
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

TextArea.propTypes = {
  width: PropType.string,
};

TextArea.defaultProps = {
  width: '100px',
};
