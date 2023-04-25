import { Navigate, Route, Routes } from "react-router-dom"
import { AsesoradosPage, FitSquadPage, RutinasPage,  ChatPage, CalendarioPage, AlimentacionPage,  } from "../pages"


export const FitSquadRoutes = () => {
  return (
    <Routes>
        <Route path="/"             element={ <FitSquadPage /> } />
        <Route path="/asesorados"   element={ <AsesoradosPage /> } />
        <Route path="/rutinas"      element={ <RutinasPage /> } />
        <Route path="/alimentacion" element={ <AlimentacionPage /> } />
        <Route path="/chat"         element={ <ChatPage /> } />
        <Route path="/calendario"   element={ <CalendarioPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
