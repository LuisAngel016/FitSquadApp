import { useDispatch, useSelector } from "react-redux"
import { fitSquadApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { data } from "autoprefixer";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        // console.log({ email, password });
        dispatch( onChecking() );

        try {
            
            const resp = await fitSquadApi.post('/auth', { email, password });
            console.log({ resp });
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime() )
            dispatch( onLogin({ name: data.name, uid: data.uid  }) )

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    return {
        // * Propiedades
        status,
        user,
        errorMessage,

        // * Métodos
        startLogin,

    }
}