import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { Toaster } from 'react-hot-toast'

function App() {
  const element = useRoutes(routes)

  return (
    <>
      {element}
      <Toaster position="bottom-right" reserveOrder={false}/>
    </>
  )
}

export default App
