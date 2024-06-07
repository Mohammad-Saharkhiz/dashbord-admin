import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'




function App(props) {
  
  let router = useRoutes(routes)

  return (
    <>
        {router}
    </>
  )
}

export default App