import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App () {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} /> */}
        </Routes>
    </>
  )
}

export default App