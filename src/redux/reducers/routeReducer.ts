enum RouteActionTypes {
  SET_NEW_ROUTE = 'SET_NEW_ROUTE',
}
interface SetNewRoute {
  type: RouteActionTypes.SET_NEW_ROUTE;
  payload: string;
}

type RouteAction = SetNewRoute;

interface RouteState {
  location: string;
}

const initilState: RouteState = {
  location: '/',
};

const routeReducer = (state = initilState, action: RouteAction): RouteState => {
  switch (action.type) {
    case RouteActionTypes.SET_NEW_ROUTE: {
      window.history.pushState(
        { state: action.payload },
        `On the page ${action.payload}`,
        action.payload,
      );
      return {
        ...state,
        location: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setNewRoute = (newLocation: string) => ({
  type: RouteActionTypes.SET_NEW_ROUTE,
  payload: newLocation,
});

export default routeReducer;
