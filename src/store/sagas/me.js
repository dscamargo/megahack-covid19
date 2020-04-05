import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import MeActions from '../ducks/me';

export function* getMe({ data }) {
  const { githubUsername } = data;
  try {
    const response = yield call(api.get, `/${githubUsername}`);

    yield put(MeActions.meGetSuccess(response.data));
  } catch (err) {
    yield put(MeActions.meFailure());
  }
}
