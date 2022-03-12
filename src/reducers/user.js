import { USER_EMAIL } from '../actions/index.login';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;