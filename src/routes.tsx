import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './pages/_layout'
import { Details } from './pages/details'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
    ],
  },
])
