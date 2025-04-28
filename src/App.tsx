import { Routes, Route } from 'react-router-dom'
import Navbar from './views/NavbarViews/Navbar'
import HomePage from './views/HomeViews/HomePage'
import LoginPage from './views/LoginViews/Login'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
