import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Layout } from '@pages/Layout/Layout'
import { NotFound } from '@pages/NotFound/NotFound'
import { Search } from '@pages/Search/Search'
import { Today } from '@pages/Today/Today'
import { Upcoming } from '@pages/Upcoming/Upcoming'

const router = createBrowserRouter([
    {
        path: '/moon-app',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '', 
                element: <Navigate to="today" replace />, 
            },
            {
                path: 'today',
                element: <Today />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'upcoming',
                element: <Upcoming />,
            },
        ],
    },
])

const App = () => <RouterProvider router={router} />

export default App
