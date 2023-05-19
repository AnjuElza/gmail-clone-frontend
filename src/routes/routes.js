import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));


const routes = {
    main: {
        path: '/',
        element: Main
    },
    
    emails: {
        path: '/emails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    },
    register: {
        path: '/register',
        element: Register
    },
    login: {
        path: '/login',
        element: Login
    }
}

export { routes };