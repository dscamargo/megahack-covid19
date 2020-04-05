import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { white, purple } from '~/styles/colors';

import { Container, Section } from './styles';
import Button from '~/components/Button';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';

export default function Register({ history }) {
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ email, skills, phone, address });

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
          <Input
            type="text"
            value={phone}
            setValue={setPhone}
            width="500px"
            label="Telefone"
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
            Enviar
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
