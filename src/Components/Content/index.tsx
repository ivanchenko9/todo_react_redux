import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import Registration from './Registration';
import Auth from './Auth';
import TodosAll from './TodosAll';

interface MyProps {
  location: string;
}

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
const Content: React.FunctionComponent<MyProps> = ({ location }) => (
  <main>
    {location === '/registration' ? (
      <Registration />
    ) : location === '/auth' ? (
      <Auth />
    ) : location === '/todos' ? (
      <TodosAll />
    ) : null}
  </main>
);

const mapStateToProps = (state) => ({
  location: state.routeReducer.location,
});

export default connect(mapStateToProps, null)(Content);
