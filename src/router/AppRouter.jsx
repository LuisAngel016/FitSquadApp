import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { FitSquadRoutes } from '../fitSquad';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Register */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* FitSquad */}
        <Route path="/*" element={ <FitSquadRoutes /> } />
    </Routes>
  )
}
