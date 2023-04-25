import { NavLink } from "react-router-dom"

export const SideBar = () => {

  return (
    <nav className='w-2/12 bg-primary h-full fixed font-FitSquad flex flex-col'>
        <h1 className="text-primary text-2xl text-center font-extrabold mt-8 mb-20">FitSquad</h1>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/"} 
        >
          Inicio
        </NavLink>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/asesorados"} 
        >
          Asesorados
        </NavLink>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/rutinas"} 
        >
          Rutinas
        </NavLink>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/alimentacion"} 
        >
          Alimentación
        </NavLink>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/chat"} 
        >
          Chat
        </NavLink>
        <NavLink 
          className={ ({ isActive }) => `navStyle ${ isActive ? ' bg-quinary' : '' }` }
          to={"/calendario"} 
        >
          Calendario
        </NavLink>
    </nav>
  )
}

