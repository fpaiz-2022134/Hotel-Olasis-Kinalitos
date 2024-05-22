import { Room } from "./pages/Room/Room.jsx"
<<<<<<< HEAD
import { User } from "./pages/Users/User.jsx"
import { Hotel } from "./pages/Hotel/Hotel.jsx"
import { HotelClientPage } from "./pages/Hotel/HotelClientPage.jsx"
import { Category } from "./pages/Category/Category.jsx"

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
    }, 
    {
=======
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
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
        path: '/category',
        element: <Category />
    }
]