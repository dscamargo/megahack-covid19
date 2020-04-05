import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import Escolher from '~/pages/Options';
import Registrar from '~/pages/Register';
import Sucesso from '~/pages/Success';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/escolher" component={Escolher} />
      <Route exact path="/registrar" component={Registrar} />
      <Route exact path="/sucesso" component={Sucesso} />
    </Switch>
  );
};

export default Routes;
