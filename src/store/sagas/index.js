import { all, takeLatest } from 'redux-saga/effects';

import { getMe } from './me';

import { MeTypes } from '../ducks/me';

export default function* rootSaga() {
  yield all([takeLatest(MeTypes.ME_GET_REQUEST, getMe)]);
}
