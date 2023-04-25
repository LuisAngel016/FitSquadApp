import iconSearch from '../../assets/icon/Search.svg';


export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-10 bg-white font-FitSquad h-auto">
        <div className='container rounded-lg font-Yogokitchen flex justify-center items-center border border-gray-400 gap-2 shadow-md'>
          <img className='w-5 ml-4' src={ iconSearch } alt="" />
            <input 
              className='inputSearch focus:outline-none focus:text-sm focus:text-secondary focus:font-FitSquad focus:border-none'
              type='search'
              placeholder='Buscar'
            /> 
        </div> 
        <div className="profile text-base font-FitSquad bg-primary text-primary flex items-center justify-center">
          <p>LB</p>
        </div>
      </header>
      <hr className='bg-primary mt-1 w-full py-px' />
    </>
  )
}
