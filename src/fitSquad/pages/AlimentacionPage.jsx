import { Header, SideBar } from '../components';
import { useInputFile } from '../';

export const AlimentacionPage = () => {

  const { handleFileSubmit, handleFileUpload } = useInputFile();

  return (
    <>
        <div className="flex justify-between">
            <div>
                <SideBar />
            </div>
            <div className="w-10/12 py-4 box-border h-auto">
                <Header />
                <div className='bg-senary relative flex justify-center items-center h-screen font-FitSquad '>
                  <div className='w-full bg-white flex flex-col justify-center items-center rounded-md absolute top-12'>
                    <h1 className='font-FitSquad font-medium text-base mt-10'>CARGAR PLAN ALIMENTICIO EN PDF</h1>
                    <div className='mt-12 rounded-lg px-6 border border-azul shadow-md'>
                        <input 
                          className='inputSearch1 focus:outline-none focus:text-sm focus:text-secondary focus:font-FitSquad focus:border-none'
                          type='search'
                          placeholder='Seleccione un asesorado'
                        /> 
                    </div> 
                    <div className='font-FitSquad flex py-9 flex-col justify-center px-52 mt-14 rounded-sm border-dotted border-2 border-azul shadow-md'>
                        <p className='font-medium text-sm text-center'>Suelte su archivo aquí <br /> o </p>
                        <input 
                            type="file" 
                            className="block w-full text-sm text-slate-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-violet-200 file:text-violet-700
                              hover:file:bg-violet-700 hover:file:text-violet-200"
                            onChange={ handleFileUpload }
                            accept=".pdf"
                          />

                      </div>
                      <button
                        className='w-44 mt-14 mb-14 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-md shadow-md'
                        onClick={ handleFileSubmit }
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
