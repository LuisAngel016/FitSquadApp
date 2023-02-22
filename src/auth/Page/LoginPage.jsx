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
            <input type="radio" className='py-2'/>
            <p className='py-2 ml-2 text-secondary text-xs font-FitSquad'>Recuerdame</p>
            <a href="#" className='py-2 ml-8 text-quaternary text-xs font-FitSquad'>¿Olvidaste tu contraseña?</a>
          </div>

          <button
            className='w-full mt-12 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-lg'
            type='submit'
          >
            Iniciar sesión
          </button>

        </section>

      </section>
    </>
  )
}
