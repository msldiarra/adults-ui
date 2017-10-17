import Relay from 'react-relay';
import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import AnonymousApp from '../components/AnonymousApp';
import IdentitySearch from '../components/IdentitySearch';
import SearchByNINA from '../components/SearchByNINA';
import SearchByRAVEC from '../components/SearchByRAVEC';
import SearchByDefault from '../components/SearchByDefault';
import Adult from '../components/Adult';

class RouteHome extends Relay.Route {

    static queries = {
        viewer: (Component, vars) => Relay.QL`
          query {
            viewer(viewerId: $viewerId) {
                 ${Component.getFragment('viewer', vars)}
            }
          }
        `
    };

    static paramDefinitions = {
        viewerId: {required: false},
    };

    static routeName = 'AppHomeRoute';
}

function requireAuth(nextState, replace) {
    if(!JSON.parse(localStorage.getItem('user'))) {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

function getParams(params, route){

    return {
        ...params,
        viewerId: (JSON.parse(localStorage.getItem('user')).id)
    }
}

function getAnonymousParams(params, route){

    return {
        ...params,
        viewerId: ''
    }
}

// ToDo : refactor all this
function getAnonymousDashboardParams(params, route){

    return {
        ...params,
        viewerId: ''
    }
}

export default  <Route>
                    <Route path="/" component={AnonymousApp} queries={RouteHome.queries} prepareParams={getAnonymousParams} >
                        <IndexRoute component={IdentitySearch} queries={RouteHome.queries} prepareParams={getAnonymousDashboardParams} />
                        <Route path="search/nina" component={SearchByNINA} queries={RouteHome.queries} prepareParams={getAnonymousParams} />
                        <Route path="search/ravec" component={SearchByRAVEC} queries={RouteHome.queries} prepareParams={getAnonymousParams} />
                        <Route path="search/default" component={SearchByDefault} queries={RouteHome.queries} prepareParams={getAnonymousParams} />
                        <Route path="nina/:ninaNumber" component={Adult} queries={RouteHome.queries} prepareParams={getAnonymousParams} />
                    </Route>
                </Route>