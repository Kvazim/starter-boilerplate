import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Home = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
    </Switch>
  </Suspense>
);

export default Home;