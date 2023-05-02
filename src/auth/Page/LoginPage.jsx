import { NavLink } from 'react-router-dom';

import { useFormIU } from '../hooks';
import imgFit from '../../assets/img/imgLogin.jpg';
import './LoginPage.css';


export const LoginPage = () => {

  const { activeEmail, activePassword, handleClickInputEmail, handleClickInputPassword, focusInput, blurInput } = useFormIU();

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
              <form action="" className="formulario font-FitSquad">
                <div>
                  <div className="input-group">
                    <input 
                      type="email" 
                      id="correo" 
                      name="correo"
                      onClick={ handleClickInputEmail }
                      className={`label ${ activeEmail ? 'active' : '' }`}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                    />
                    <label className="label"  for="correo">Correo electronico</label>
                  </div>
                  <div className="input-group">
                    <input 
                      type="password" 
                      id="pass" 
                      name="pass" 
                      onClick={ handleClickInputPassword }
                      className={`label ${ activePassword ? 'active' : '' } `}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                    />
                    <label className="label" for="pass">Contraseña</label>
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

