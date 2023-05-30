import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { FitSquadRoutes } from '../fitSquad';
import { getEnvVariables } from '../fitSquad/helpers';
// import { useAuthStore } from '../hooks';
// import { CheckingAuth } from '../ui';

export const AppRouter = () => {

  // const { status } = useAuthStore();

  console.log(getEnvVariables());
  // if ( status === 'checking' ) {
  //   return <CheckingAuth />
  // }

  return (
    <Routes>
      {/* (status === 'not-authenticated')
            ? ( */}
                {/* Login y Register */}
                <Route path="/auth/*" element={ <AuthRoutes /> } />
             {/* )
            : ( */}
                {/* FitSquad */}
                <Route path="/*" element={ <FitSquadRoutes /> } />
              {/* ) */}
    </Routes>
  )
}
