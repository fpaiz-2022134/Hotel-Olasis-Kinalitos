import { Room } from "./pages/Room/Room.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { Reservation } from "./pages/Reservation/Reservation.jsx"

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
        path: '/reservation',
        element: <Reservation/>
    }
]