import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import Registration from './Registration';
import Auth from './Auth';
import TodosAll from './TodosAll';
import { StoreContext } from '../../protoRedux/store';

// interface MyProps {
//   location: string;
// }

// const Content: React.FunctionComponent = () => (
//   <main>
//     <Route path="/registration" exact>
//       <Registration />
//     </Route>
//     <Route path="/auth" exact>
//       <Auth />
//     </Route>
//     <Route path="/todos" exact>
//       <TodosAll />
//     </Route>
//   </main>
// );
const Content: React.FunctionComponent = () => {
  const store = useContext(StoreContext);
  console.log('New location is: ', store.getState().routeReducer.location);
  return (
    <main>
      {store.getState().routeReducer.location === '/registration' ? (
        <Registration />
      ) : store.getState().routeReducer.location === '/auth' ? (
        <Auth />
      ) : store.getState().routeReducer.location === '/todos' ? (
        <TodosAll />
      ) : null}
    </main>
  );
  // return (
  //   <main>
  //     {store.getState().routeData.location === '/registration' ? (
  //       <Registration />
  //     ) : store.getState().routeData.location === '/auth' ? (
  //       <Auth />
  //     ) : store.getState().routeData.location === '/todos' ? (
  //       <TodosAll />
  //     ) : null}
  //   </main>
  // );
};

export default Content;

// const mapStateToProps = (state) => ({
//   location: state.routeReducer.location,
// });

// export default connect(mapStateToProps, null)(Content);
