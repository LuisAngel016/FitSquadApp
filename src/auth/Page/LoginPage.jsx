import { Link } from 'react-router-dom';
import imgFit from '../../assets/imgLogin.jpg';

export const LoginPage = () => {
  return (
    <>
      <section className="w-full h-auto my-36 flex justify-center bg-white ">
        <div className="mr-2">
          <img
          className='w-4/5 h-auto rounded-xl shadow-sm' 
          src={ imgFit } 
          alt="logo de fitSquad" 
          />
        </div>
          <hr />
        <section className='bg-terciary flex-col justify-center'>
          <h1 className="text-3xl text-secondary font-extrabold mb-14 font-FitSquad text-center">FitSquad</h1>
          
          <form action="">
            <input
            className='inputForm'
              type="text" 
              name='Correo'
              placeholder='Correo electronico'
            /> <br />
            <input 
              className='inputForm'
              type="password" 
              name='Contraseña'
              placeholder='Contraseña'
            />
          </form>

          <div className='flex mt-2 justify-between'>
            <input type="checkbox" className='py-2'/>
            <p className='py-2 ml-2 text-secondary text-xs font-FitSquad'>Recuerdame</p>
            <Link
             className='py-2 ml-8 text-quaternary text-xs font-FitSquad'
             to=""
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            className='w-full mt-12 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-lg'
            type='submit'
          >
            Iniciar sesión
          </button>

          <Link
           className='mt-8 float-right pb-0 text-quaternary text-xs font-FitSquad border-solid border-b border-blue-900'
           to="/auth/register"
          >
            Crear una cuenta
          </Link>
        </section>

      </section>
    </>
  )
}
