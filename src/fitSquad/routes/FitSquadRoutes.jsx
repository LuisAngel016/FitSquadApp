import { Navigate, Route, Routes } from "react-router-dom"
import { AsesoradosPage, FitSquadPage } from "../pages"


export const FitSquadRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <FitSquadPage /> } />
        <Route path="/asesorados" element={ <AsesoradosPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
