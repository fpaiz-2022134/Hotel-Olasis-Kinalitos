import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast'
=======
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5

function App() {
  const element = useRoutes(routes)

  return (
    <>
      {element}
<<<<<<< HEAD
      <Toaster position="bottom-right" reserveOrder={false}/>
=======
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
    </>
  )
}

export default App
