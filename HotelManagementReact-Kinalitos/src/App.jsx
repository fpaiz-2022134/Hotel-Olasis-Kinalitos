import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
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
