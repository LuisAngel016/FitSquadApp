import { useDispatch } from 'react-redux';
import iconSearch from '../../assets/icon/Search.svg';
import { useForm } from '../../hooks';
// import { Search } from './Search';


const initialSearch = {
  searchText: ''
}

export const Header = () => {

  const dispatch = useDispatch();
  
  
  const { searchText, onInputChange } = useForm( initialSearch );

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
  
    if (!searchText.trim()) {
      Swal.fire("Error al seleccionar un asesorado", "Por favor ingrese un nombre de asesorado", "error")
      return;
    }

    // if ( !q ) {
    //   dispatch(  onSetError( q ) );
    // } 
  }

  return (
    <>
      <header className="flex justify-between items-center px-10 bg-white font-FitSquad ">
        <div className='rounded-lg flex justify-center items-center gap-2 shadow-md'>
          <form 
            onSubmit={ onSearchSubmit }
            className='w-72 font-FitSquad py-2 bg-terciary  focus-within:border-sky-500 focus-within:ring-sky-500 focus-within:ring-1 focus-within:font-FitSquad px-1 border shadow-sm rounded-lg  border-slate-300 flex justify-between items-center'
          >
            <button 
              className='px-2 text-sm text-center text-secondary '
              type='submit'
            >
              <img className='w-5' src={ iconSearch } alt="" />
            </button>

            <input 
              className='px-3 placeholder:text-secondary w-60 rounded-lg sm:text-sm focus:outline-none '
              type='search'
              placeholder='Seleccione un asesorado'
              name='searchText'
              value={ searchText }
              onChange={ onInputChange }
            /> 
          </form>
        </div> 
        <div className="profile text-base font-FitSquad bg-primary text-primary flex items-center justify-center">
          <p>LB</p>
        </div>
      </header>
      <hr className='bg-primary mt-1 w-full py-px' />
    </>
  )
}
