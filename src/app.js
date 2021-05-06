import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export function App() {
    const { user } = useAuthListener();
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <SignIn />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <SignUp />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
