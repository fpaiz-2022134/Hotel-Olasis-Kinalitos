import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  const element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}

export default App
