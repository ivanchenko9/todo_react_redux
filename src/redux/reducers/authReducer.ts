export enum AuthActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

interface SetCurrnetUserAction {
  type: AuthActionTypes.SET_CURRENT_USER;
  payload: any;
}

type AuthAction = SetCurrnetUserAction;

const initilState: AuthState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initilState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER: {
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

export const setCurrentUser = (user: any) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user,
});

export default authReducer;
