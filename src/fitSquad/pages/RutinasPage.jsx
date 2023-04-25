import { Header, SideBar } from '../components';

export const RutinasPage = () => {
  return (
    <>
        <div className="flex justify-between">
            <div>
                <SideBar />
            </div>
            <div className="w-10/12 py-4 box-border h-auto">
                <Header />
                <div className='bg-senary flex items-center justify-center px-10'>
                <div className='w-full h-full bg-white flex flex-col justify-center items-center my-12 py-8 rounded-md'>
                    <h1 className='font-FitSquad font-medium text-base mt-10'>CARGAR RUTINA EN PDF</h1>
                    <div className='mt-12 rounded-lg px-6 border border-azul shadow-md'>
                        <input 
                          className='inputSearch1 focus:outline-none focus:text-sm focus:text-secondary focus:font-FitSquad focus:border-none'
                          type='search'
                          placeholder='Seleccione un asesorado'
                        /> 
                    </div> 
                    <div className='font-FitSquad flex py-9 flex-col justify-center px-52 mt-14 rounded-sm border-dotted border-2 border-azul shadow-md'>
                        <p className='font-medium text-sm text-center'>Suelte su archivo aquí <br /> o </p>
                        <input type="file" class="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-200 file:text-violet-700
                             hover:file:bg-violet-700 hover:file:text-violet-200
                        "/>

                    </div>
                    <button
                      className='w-44 mt-14 mb-1 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-md shadow-md'
                    >
                      Subir archivo
                    </button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
