import { Room } from "./pages/Room/Room.jsx"
import { User } from "./pages/Users/User.jsx"
import { Hotel } from "./pages/Hotel/Hotel.jsx"
import { HotelClientPage } from "./pages/Hotel/HotelClientPage.jsx"

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
        path: '/hotel/*',
        element: <Hotel />
    },{
        path: '/hotelClient/*',
        element: <HotelClientPage />
    }
]