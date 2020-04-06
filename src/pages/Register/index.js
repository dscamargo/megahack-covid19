import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { white, purple } from '~/styles/colors';

import { Container, Section } from './styles';
import Button from '~/components/Button';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import MaskedInput from '~/components/MaskedInput';

const mask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
const nineDigitMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export default function Register({ history }) {
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function somenteNumeros(s) {
    return s && s.replace(/[^0-9]/g, '');
  }

  function handleChangeMask(rawValue) {
    const formatted = somenteNumeros(rawValue);
    if (formatted.length > 10) {
      return nineDigitMask;
    }
    return mask;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log({ email, skills, phone: somenteNumeros(phone), address });

    history.push('/sucesso');
  }

  return (
    <Container>
      <Section>
        <strong>
          Tem alguma habilidade ou conhecimento que quer compartilhar?
        </strong>
        <span>
          As informações compartilhadas neste formulário são sigilosas e serão
          utilizadas apenas para facilitar o contato entre as pessoas
          interessadas.
        </span>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            setValue={setEmail}
            width="500px"
            label="E-mail"
          />
          <MaskedInput
            onChange={e => setPhone(e.target.value)}
            value={phone}
            setValue={setPhone}
            mask={handleChangeMask}
            label="Telefone"
            width="500px"
          />
          <Input
            type="text"
            value={address}
            setValue={setAddress}
            width="500px"
            label="Endereço"
          />
          <TextArea
            value={skills}
            setValue={setSkills}
            width="500px"
            label="Quais habilidades você gostaria de compartilhar?"
          />
          <Button
            type="submit"
            background={white}
            backgroundWhenHover={purple}
            fontColorWhenHover={white}
            fontColor={purple}
            borderColor={purple}
            width="150px"
            height="60px"
          >
            <span>Enviar</span>
          </Button>
        </form>
      </Section>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
