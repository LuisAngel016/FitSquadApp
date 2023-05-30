

export const SelectedAdvised = ({ img, user } ) => {

    const { name, estado, objetivo, peso } = user;

  return (
    <main className="font-FitSquad rounded-md text-center text-base shadow-md px-4 py-2 font-normal flex justify-between items-center gap-14">
      <section className='flex gap-1'>
        <figure className='w-12'>
          <img className='rounded-full ' src={ img } alt="" />
        </figure>
        <span>
        <span className=" flex items-center gap-2">
          { name }
        </span>
        <span className='flex gap-4 text-terciary'>
          <span>{ peso }</span>
          <span>{ objetivo }</span>
        </span>
        </span>
      </section>
      <span className='bg-secondary py-1 px-3 rounded-md'>  
        <span className='text-primary'>{ estado }</span>
      </span>
    </main>
  )
}
