import { Navigate, Route, Routes } from "react-router-dom"
import { FitSquadPage } from "../pages"


export const FitSquadRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <FitSquadPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
