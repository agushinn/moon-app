import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@pages/Layout/Layout'
import { NotFound } from '@pages/NotFound/NotFound'
import { Search } from '@pages/Search/Search'
import { Today } from '@pages/Today/Today'
import { Upcoming } from '@pages/Upcoming/Upcoming'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Today />,
                index: true,
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
