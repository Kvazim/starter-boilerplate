import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Home = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/basic`} />
      <Route path={`${match.url}/basic`} component={lazy(() => import(`./basic`))} />
    </Switch>
  </Suspense>
);

export default Home;