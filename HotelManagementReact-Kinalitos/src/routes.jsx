import { Room } from "./pages/Room/Room.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { Hotel } from "./pages/Hotel/Hotel.jsx"

import { User } from "./pages/User/User.jsx"
import { HomePageAdmin } from "./pages/HomePage/HomePageAdmin.jsx"
import { Invoice } from "./pages/Invoice/Invoice.jsx"

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/user/*',
        element: <User />
    },
    {
        path: '/room/*',
        element: <Room />
    },
    {
        path: '/hotel/*',
        element: <Hotel />
    },
    {
        path: '/admin/*',
        element: <HomePageAdmin />
    },
    {
        path: '/invoice/*',
        element: <Invoice />
    }
]