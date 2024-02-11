import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Components = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/dashboards`} />
      <Route path={`${match.url}`} component={lazy(() => import(`./dashboards`))} />
    </Switch>
  </Suspense>
);

export default Components;