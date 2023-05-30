import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Page';


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        {/* <Route path="register" element={ <RegisterPage /> } /> */}

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
