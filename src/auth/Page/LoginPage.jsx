import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useAuthStore, useForm } from '../../hooks';
import { useFormIU } from '../hooks';
import Swal from 'sweetalert2';

import imgFit from '../../assets/img/imgLogin.jpg';

import './LoginPage.css';
import { useEffect } from 'react';


const loginFormFields = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { startLogin, errorMessage } = useAuthStore();

  const { activeEmail, activePassword, handleClickInputEmail, handleClickInputPassword, focusInput, blurInput } = useFormIU();
  const { email, password, onInputChange, onResetForm } = useForm( loginFormFields );

  const loginSubmit = ( event ) => {
    event.preventDefault();
    // console.log({ email, password })
    startLogin({ email, password });
  }

  useEffect(() => {

    if ( errorMessage !== undefined ) {
        Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
    
  }, [errorMessage]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-32 flex justify-center bg-white ">
        <div className="mr-2">
          <img
          className='w-4/5 h-auto rounded-xl shadow-sm' 
          src={ imgFit } 
          alt="logo de fitSquad" 
          />
        </div>
          <hr />
        <section className='bg-white flex-col justify-center'>
          <h1 className="text-3xl text-secondary font-extrabold mb-14 font-FitSquad text-center">FitSquad</h1>
          <div className="contenedor-formulario">
            <div className="wrap">
              <form onSubmit={ loginSubmit } className="formulario font-FitSquad">
                <div>
                  <div className="input-group">
                    <input 
                      type="email" 
                      id="correo" 
                      name="email"
                      onClick={ handleClickInputEmail }
                      className={`label ${ activeEmail ? 'active' : '' }`}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                      value={ email }
                      onChange={ onInputChange }
                    />
                    <label className="label"  >Correo electronico</label>
                  </div>
                  <div className="input-group">
                    <input 
                      type="password" 
                      id="pass" 
                      name="password" 
                      onClick={ handleClickInputPassword }
                      className={`label ${ activePassword ? 'active' : '' } `}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                      value={ password }
                      onChange={ onInputChange }
                    />
                    <label className="label" >Contraseña</label>
                  </div>
                </div>
                <div className='flex mt-2 justify-between'>
                  <input type="checkbox" className='py-2'/>
                  <p className='py-2 ml-1 text-secondary text-xs'>Recuerdame</p>
                  <NavLink
                    className='py-2 ml-8 text-quaternary text-xs'
                    to=""
                  >
                    ¿Olvidaste tu contraseña?
                  </NavLink>
                </div>
                <button
                  className='w-full mt-12 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-lg  hover:bg-violet-700 hover:text-violet-200'
                  type='submit'
                >
                  Iniciar sesión
                </button>
              </form>
            </div>
          </div>

        </section>

      </section>
    </>
  )
}


