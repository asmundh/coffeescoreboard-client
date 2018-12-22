import axios from 'axios';
import initialState from '../initialState';

const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const scoreboardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case (FETCH_USERS_BEGIN):
      return Object.assign({}, state, { loading: true });
    case (FETCH_USERS_SUCCESS):
      return Object.assign({}, state, { loading: false });
    case (FETCH_USERS_FAILURE):
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
};

export default scoreboardReducer;

export function fetchScoreboardBegin() {
  return { type: FETCH_USERS_BEGIN };
}

export function fetchScoreboardSuccess() {
  return { type: FETCH_USERS_SUCCESS };
}

export function fetchScoreboardFailure() {
  return { type: FETCH_USERS_FAILURE };
}

export function fetchScoreboard() {
  return (dispatch) => {
    dispatch(fetchScoreboardBegin());
    axios
      .get('http://127.0.0.1:27017')
      .then((response) => {
        dispatch(fetchScoreboardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchScoreboardFailure(error));
      });
  };
}
