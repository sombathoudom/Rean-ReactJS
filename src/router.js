import React from 'react';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const About = React.lazy(() => import('./pages/About'));
const Service = React.lazy(() => import('./pages/Service'));

const routes = [
    { path: '*', exact: true, name: 'Dashboard', element: Dashboard },
    { path: "/home", exact: true,name: "Home", element: Dashboard },
    { path: "/service",exact: true, name: "Service", element: Service },
    { path: "/about",exact: true, name: "About", element: About },
]

export default routes;