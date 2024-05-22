import { Room } from "./pages/Room/Room.jsx"
import { User } from "./pages/Users/User.jsx"
import { Hotel } from "./pages/Hotel/Hotel.jsx"
import { Reservation } from "./pages/Reservation/Reservation.jsx"

export const routes = [
    {
        path: '/user',
        element: <User />
    },
    {
        path: '/room',
        element: <Room/>
    },
    {
        path: '/hotel',
        element: <Hotel />
    },
    {
        path: '/reservation',
        element: <Reservation />
    }
]