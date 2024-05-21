import { Room } from "./pages/Room/Room.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { Category } from "./pages/Category/Category.jsx"
import { ViewRoomAdmin } from "./pages/Room/ViewRoomAdmin.jsx"

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
        element: <Category/>
    },
    {
        path: '/viewRoomAdmin/*',
        element: <ViewRoomAdmin/>
    }
]