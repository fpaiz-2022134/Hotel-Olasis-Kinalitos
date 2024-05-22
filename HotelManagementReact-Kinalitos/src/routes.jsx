import { Room } from "./pages/Room/Room.jsx"
import { Category } from "./pages/Category/Category.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/room/*',
        element: <Room />
    },
    {
        path: '/category',
        element: <Category />
    }
]