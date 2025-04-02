// src/routes/index.js
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout.jsx';

// routes
const Home = lazy(() => import('../pages/public/Home.jsx'));
const Login = lazy(() => import('../pages/public/Login.jsx'));
const Dashboard = lazy(() => import('../pages/private/dashboard/Dashboard.jsx'));
const Analytics = lazy(() => import('../pages/private/anality/Analytics.jsx'));
const Ecommerce = lazy(() => import('../pages/private/ecommerce/Ecommerce.jsx'));
// const Applications = lazy(() => import('../pages/private/Applications'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));


const routes = [
    {
        path: '/',
        index: true,
        element: <Home />,
    },
    {
        path: '/dashboard',
        element: <MainLayout />,
        children: [
            {
                element: <Dashboard />,
            },
            {
                path: 'analytics',
                element: <Analytics />,
            },
            {
                path: 'ecommerce',
                element: <Ecommerce />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
const router = createBrowserRouter(routes);
// MainRouter component that wraps everything in Suspense
export const MainRouter = () => {
    return (
        <Suspense fallback={<div><h1>loading...</h1></div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};