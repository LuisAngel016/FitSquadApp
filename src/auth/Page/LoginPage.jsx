import { NavLink } from 'react-router-dom';
import imgFit from '../../assets/img/imgLogin.jpg';
import { useEffect, useMemo, useState } from 'react';

import './LoginPage.css';
import { focusInput } from '../helpers/formulario';

export const LoginPage = () => {

  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const handleClickInputEmail = () => {
    setActiveEmail(true);
  };

  const handleClickInputPassword = () => {
    setActivePassword(true);
  };

  const focusInput = function ( event ) {
    event.target.parentElement.children[1].className = "label active";
    event.target.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  const blurInput = function (event) {
    if (event.target.value <= 0) {
      event.target.parentElement.children[1].className = "label";
      event.target.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };
  

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
          <div class="contenedor-formulario">
            <div class="wrap">
              <form action="" class="formulario font-FitSquad">
                <div>
                  <div class="input-group">
                    <input 
                      type="email" 
                      id="correo" 
                      name="correo"
                      onClick={ handleClickInputEmail }
                      className={`label ${ activeEmail ? 'active' : '' }`}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                    />
                    <label class="label"  for="correo">Correo electronico</label>
                  </div>
                  <div class="input-group">
                    <input 
                      type="password" 
                      id="pass" 
                      name="pass" 
                      onClick={ handleClickInputPassword }
                      className={`label ${ activePassword ? 'active' : '' } `}
                      onBlur={ blurInput }
                      onFocus={ focusInput }
                    />
                    <label class="label" for="pass">Contraseña</label>
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
                  className='w-full mt-12 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-lg  hover:bg-violet-700 hover:file:text-violet-200'
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

