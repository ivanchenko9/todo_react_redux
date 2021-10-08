import { IUser, AuthState, AuthAction } from '../types';
import {
  setCurrentUser,
  setCurrentUserFromLS,
  registration,
  logout,
} from '../actions';

const initilState: AuthState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initilState, action: AuthAction): AuthState => {
  switch (action.type) {
    case setCurrentUser.SUCCESS: {
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload,
      };
    }
    case setCurrentUserFromLS.SUCCESS: {
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload,
      };
    }
    case logout.SUCCESS: {
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setCurrentUserAC = (user: any) => ({
  type: setCurrentUser.REQUEST,
  payload: user,
});
export const setCurrentUserFromLSAC = (user: any) => ({
  type: setCurrentUserFromLS.REQUEST,
  payload: user,
});
export const registrationAC = (user: IUser) => ({
  type: registration.REQUEST,
  payload: user,
});
export const logoutAC = (userId: string) => ({
  type: logout.REQUEST,
  payload: userId,
});

export default authReducer;
