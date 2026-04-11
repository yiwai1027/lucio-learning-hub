import { lazy, Suspense } from 'react'
import { App } from 'antd'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { useAppStore } from '../store'

const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const About = lazy(() => import('../pages/About'))
const KpiRedux = lazy(() => import('../pages/KpiRedux'))
const KpiZustand = lazy(() => import('../pages/KpiZustand'))
const LearningShowcase = lazy(() => import('../pages/LearningShowcase'))
const Learning20260410 = lazy(() => import('../pages/Learning20260410'))
const Learning20260411 = lazy(() => import('../pages/Learning20260411'))
const LearningArchive = lazy(() => import('../pages/LearningArchive'))
const LearningArchiveDetail = lazy(() => import('../pages/LearningArchiveDetail'))
const MainLayout = lazy(() => import('../layouts/MainLayout'))

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>{node}</Suspense>
)

const AuthGuard = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

const GuestGuard = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />
}

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
            path: '/kpi-redux',
            element: withSuspense(<KpiRedux />),
          },
          {
            path: '/kpi-zustand',
            element: withSuspense(<KpiZustand />),
          },
          {
            path: '/learning-showcase',
            element: withSuspense(<LearningShowcase />),
          },
          {
            path: '/learning-20260410',
            element: withSuspense(<Learning20260410 />),
          },
          {
            path: '/learning-20260411',
            element: withSuspense(<Learning20260411 />),
          },
          {
            path: '/learning-archive',
            element: withSuspense(<LearningArchive />),
          },
          {
            path: '/learning-archive/:date',
            element: withSuspense(<LearningArchiveDetail />),
          },
          {
            path: '/about',
            element: withSuspense(<About />),
          },
        ],
      },
    ],
  },
])

export const AppRouter = () => {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  )
}
