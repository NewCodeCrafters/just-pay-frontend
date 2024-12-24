import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Onboarding from "./pages/Onboarding";
import Header from "./components/Header";


function App() {
  return (
    <div className="min-h-svh dark:bg-dark-header bg-main ">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
