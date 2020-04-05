import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  meGetRequest: ['data'],
  meGetSuccess: ['data'],
  meFailure: null,
});

export const MeTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export const request = state => ({ ...state, loading: true });
export const success = state => ({ ...state, loading: false, error: false });
export const failure = state => ({ ...state, loading: false, error: true });

export const getMe = (state, { data }) => ({
  ...state,
  loading: false,
  error: false,
  data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ME_GET_REQUEST]: request,
  [Types.ME_GET_SUCCESS]: getMe,
  [Types.ME_FAILURE]: failure,
});
