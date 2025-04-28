import { Routes, Route } from 'react-router-dom'
import Navbar from './views/NavbarViews/Navbar'
import HomePage from './views/HomeViews/HomePage'
import LoginPage from './views/LoginViews/Login'
import Register from './views/RegisterView/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
