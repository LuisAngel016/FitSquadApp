export const SideBar = () => {
  return (
    <section className='w-2/12 bg-primary h-full  fixed font-FitSquad flex flex-col'>
        <h1 className="text-primary text-2xl text-center font-extrabold mt-8 mb-20">FitSquad</h1>
        <h4 className="navStyle bg-quinary">Inicio</h4>
        <h4 className="navStyle">Asesorados</h4>
        <h4 className="navStyle">Rutinas</h4>
        <h4 className="navStyle">Alimentación</h4>
        <h4 className="navStyle">Chat</h4>
        <h4 className="navStyle">Calendario</h4>
    </section>
  )
}

