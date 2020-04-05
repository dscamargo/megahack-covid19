import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MeActions from '~/store/ducks/me';

// import { Container } from './styles';

export default function Main() {
  const { meGetRequest } = MeActions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meGetRequest({ githubUsername: 'dscamargo' }));
  }, [dispatch, meGetRequest]);

  return <h1>Pagina Main</h1>;
}
