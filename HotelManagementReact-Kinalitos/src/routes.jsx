import { Room } from "./pages/Room/Room.jsx"
import { User } from "./pages/Users/User.jsx"

export const routes = [
    {
        path: '/user',
        element: <User />
    },
    {
        path: '/room',
        element: <Room/>
    }
]