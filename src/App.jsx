import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Componenets/Navbar'
import HomePage from './Pages/Homepage'
import Footer from './Componenets/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
