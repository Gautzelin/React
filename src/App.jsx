
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import FormularioLogin from "./paginas/FormularioLogin";
import FundamentosUseEffect from "./paginas/FundamentosUseEffect";
import FundamentosUseState from "./paginas/FundamentosUseState";
import LandingPage from "./paginas/LandingPage";




function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LandingPage/>}>
      </Route>

      <Route path="/login" element={<Login/>}>
        <Route index element={<FormularioLogin/>}/>
       {/* <Route path = "form" element={<FormularioLogin/>}/> */ }
      </Route>

      <Route path="/fundamentos" element={<Dashboard/>}>
      <Route path="usestate" element={<FundamentosUseState />} />
      <Route path="useffect" element={<FundamentosUseEffect />} />


      </Route>

    </Routes>
  </BrowserRouter>


  )
}

export default App
