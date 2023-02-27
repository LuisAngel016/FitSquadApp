

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <>
        <section className='bg-primary w-60 h-full p-8'>
            <h1 className="text-primary text-2xl text-center font-extrabold mt-8 mb-14 font-FitSquad mb12-2">FitSquad</h1>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Home</h4>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Asesorados</h4>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Rutinas</h4>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Alimentación</h4>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Chat</h4>
            <h4 className="text-primary text-xs ml-6 mt-2 font-FitSquad">Calendario</h4>
        </section>
    </>
  )
}
