import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../components/app/App';
import Home from '../components/home/Home';
import About from '../components/about/About';
import NotFound from '../components/notFound/NotFound';

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/about',
  exact: true,
  component: About
}, {
  component: NotFound
}];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map(route => (
          <Route key={route.path || 'notfound'} {...route} />
        ))}
      </Switch>
    </App>
  );
}