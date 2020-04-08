import React from 'react';
import Loader from 'react-loader-spinner';

import { purple } from '~/styles/colors';

export default function Loading() {
  return <Loader type="Oval" color={purple} height={30} width={30} />;
}
