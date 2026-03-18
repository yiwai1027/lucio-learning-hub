import { lazy, Suspense } from 'react';
import { App } from 'antd';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { useAppStore } from '../store';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const About = lazy(() => import('../pages/About'));
const MainLayout = lazy(() => import('../layouts/MainLayout'));

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>{node}</Suspense>
);

const AuthGuard = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const GuestGuard = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        path: '/login',
        element: withSuspense(<Login />),
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: withSuspense(<MainLayout />),
        children: [
          {
            path: '/dashboard',
            element: withSuspense(<Dashboard />),
          },
          {
            path: '/about',
            element: withSuspense(<About />),
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};
