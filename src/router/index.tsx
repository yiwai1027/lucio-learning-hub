import { lazy, Suspense } from 'react'
import { App } from 'antd'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const LearningShowcase = lazy(() => import('../pages/LearningShowcase'))
const Learning20260330 = lazy(() => import('../pages/Learning20260330'))
const Learning20260331 = lazy(() => import('../pages/Learning20260331'))
const Learning20260410 = lazy(() => import('../pages/Learning20260410'))
const Learning20260411 = lazy(() => import('../pages/Learning20260411'))
const Learning20260414 = lazy(() => import('../pages/Learning20260414'))
const Learning20260415 = lazy(() => import('../pages/Learning20260415'))
const Learning20260416 = lazy(() => import('../pages/Learning20260416'))
const Learning20260417 = lazy(() => import('../pages/Learning20260417'))
const LearningArchive = lazy(() => import('../pages/LearningArchive'))
const LearningArchiveDetail = lazy(() => import('../pages/LearningArchiveDetail'))
const MainLayout = lazy(() => import('../layouts/MainLayout'))

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>{node}</Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/learning-archive" replace />,
  },
  {
    element: withSuspense(<MainLayout />),
    children: [
      {
        path: '/learning-showcase',
        element: withSuspense(<LearningShowcase />),
      },
      {
        path: '/learning-20260330',
        element: withSuspense(<Learning20260330 />),
      },
      {
        path: '/learning-20260331',
        element: withSuspense(<Learning20260331 />),
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
        path: '/learning-20260414',
        element: withSuspense(<Learning20260414 />),
      },
      {
        path: '/learning-20260415',
        element: withSuspense(<Learning20260415 />),
      },
      {
        path: '/learning-20260416',
        element: withSuspense(<Learning20260416 />),
      },
      {
        path: '/learning-20260417',
        element: withSuspense(<Learning20260417 />),
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
])

export const AppRouter = () => {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  )
}
