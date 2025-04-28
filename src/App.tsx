import { Routes, Route } from 'react-router-dom'
import Navbar from './views/NavbarViews/Navbar'
import HomePage from './views/HomeViews/HomePage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
