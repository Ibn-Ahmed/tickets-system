import { Route, Routes } from "react-router-dom"
import { DashBoard } from "./pages/DashBoard"
import { HomeScreen } from "./pages/HomeScreen"
import { Navbar } from "./components/Navbar";



function App() {

  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
    </>
  )
}

export default App
