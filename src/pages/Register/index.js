import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import api from '~/services/api';

import { white, purple } from '~/styles/colors';

import { nineDigitMask, normalMask, zipcodeMask } from '~/utils/mask';

import { Container, Section, InputsRow, InputContainer } from './styles';
import Button from '~/components/Button';
import Input from '~/components/Input';
import MaskedInput from '~/components/MaskedInput';
import Loading from '~/components/Loading';

export default function Register({ history }) {
  const [loading, setLoading] = useState(false);
  const [complement, setComplement] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  async function getAddress(latitude, longitude) {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_MAPS_API_KEY}&pretty=1&no_annotations=1`
    );
    return response.data.results[0].components;
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success => {
        const { latitude } = success.coords;
        const { longitude } = success.coords;

        getAddress(latitude, longitude).then(response => {
          setCity(response.city || '');
          setZipcode(response.postcode || '');
          setState(response.state_code || '');
        });
      });
    }
  }, []);

  function somenteNumeros(s) {
    return s && s.replace(/[^0-9]/g, '');
  }

  function handleChangeMask(rawValue) {
    const formatted = somenteNumeros(rawValue);
    if (formatted.length > 10) {
      return nineDigitMask;
    }
    return normalMask;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      address: {
        zipcode: somenteNumeros(zipcode),
        city,
        state,
        district,
        number,
        complement,
        street,
      },
      services: skills,
      phone: somenteNumeros(phone),
    };

    setLoading(true);
    await api.post('/users', data);
    setLoading(false);

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
            width="100%"
            label="E-mail"
          />
          <MaskedInput
            onChange={e => setPhone(e.target.value)}
            value={phone}
            setValue={setPhone}
            mask={handleChangeMask}
            label="Telefone"
            width="100%"
          />
          <InputsRow>
            <MaskedInput
              mask={zipcodeMask}
              type="text"
              value={zipcode}
              setValue={setZipcode}
              width="30%"
              label="CEP"
            />
            <Input
              type="text"
              value={city}
              setValue={setCity}
              width="48%"
              label="Cidade"
            />
            <Input
              type="text"
              value={state}
              setValue={setState}
              width="18%"
              label="UF"
              maxLength={2}
            />
          </InputsRow>
          <InputsRow>
            <Input
              type="text"
              value={district}
              setValue={setDistrict}
              width="80%"
              label="Bairro"
            />
            <Input
              type="text"
              value={number}
              setValue={setNumber}
              width="18%"
              label="Número"
            />
          </InputsRow>
          <Input
            type="text"
            value={street}
            setValue={setStreet}
            width="100%"
            label="Rua"
          />
          <Input
            type="text"
            value={complement}
            setValue={setComplement}
            width="100%"
            label="Complemento"
          />
          <InputContainer>
            <Input
              type="text"
              value={skills}
              setValue={setSkills}
              width="100%"
              label="Quais habilidades você gostaria de compartilhar?"
            />
            <span>
              * Insira suas habilidades separadas por ponto e vírgula(;).
            </span>
          </InputContainer>
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
            {loading ? <Loading /> : <span>Enviar</span>}
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
