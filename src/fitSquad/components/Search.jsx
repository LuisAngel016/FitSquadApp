import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Swal from 'sweetalert2';

import { onSetSelectUser } from '../../store';
import { SelectedAdvised } from './';
import { useForm } from '../../hooks';
import { getUserByName } from '../helpers';

import iconError from '../../assets/icon/iconError.png';
import iconSearch from '../../assets/icon/Search.svg';
import profileImg from '../../assets/img/profileImg.svg';


const initialSearch = {
    searchText: ''
}

export const Search = () => {

  const { selectUser, errorMessage } = useSelector( state => state.fitSquad );
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse( location.search );
  // console.log(location)
  
  const { searchText, onInputChange, onResetForm } = useForm( initialSearch );

  const users = getUserByName(q);

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
  
    if (!searchText.trim()) {
      Swal.fire("Error al seleccionar un asesorado", "Por favor ingrese un nombre de asesorado", "error")
      return;
    }
    
    
    navigate(`?q=${ searchText }`);
    navigate('');
    dispatch( onSetSelectUser() );
    onResetForm();
  }
  // console.log({selectUser});
  
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <form 
        onSubmit={ onSearchSubmit }
        className='w-72 font-FitSquad py-2 bg-terciary  focus-within:border-sky-500 focus-within:ring-sky-500 focus-within:ring-1 focus-within:font-FitSquad mt-8 px-1 border shadow-sm rounded-lg  border-slate-300 flex justify-between items-center'
      >
        <input 
          className='px-3 placeholder:text-terciary w-60 rounded-lg sm:text-sm focus:outline-none '
          type='search'
          placeholder='Seleccione un asesorado'
          name='searchText'
          value={ searchText }
          onChange={ onInputChange }
        /> 

        <button 
          className='px-2 text-sm text-center text-secondary'
          type='submit'
        >
          <img className='w-5' src={ iconSearch } alt="" />
        </button>
      </form>
      {
        ( selectUser )
          ? users.map( ( user, index ) => (
             <SelectedAdvised user={ user } key={ user.id } img={ profileImg } />
          
            ))
          : <div className={ `${ !q ? 'hidden' : ''} flex gap-1 items-center bg-red-100 border border-red-500 text-red-700 px-2 py-2 rounded-md` }>
            <img className='w-6 h-auto' src={ iconError } alt="icono de error" />
            <p className="block sm:inline text-sm">No se encontró el asesorado con el nombre: <span className='text-base font-bold'>{ q }</span></p>
          </div>
      }
      
    </div> 
  )
}
