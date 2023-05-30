import { Header, Search, SideBar } from '../components';
import { useInputFile } from '../';

import pdfIcon from '../../assets/icon/archivo-pdf.png'

export const AlimentacionPage = () => {

  const { handleFileSubmit, isLoadingFile, handleFileUpload, handleFileDrop, fileInputRef } = useInputFile();

  return (
    <>
        <div className="flex justify-between">
            <aside>
                <SideBar />
            </aside>
            <main className="w-10/12 py-4 box-border h-screen overflow-hidden">
                <Header />
                <div className='bg-senary relative flex justify-center items-center h-screen px-10'>
                  <section className='w-full font-FitSquad bg-white flex flex-col justify-center items-center rounded-md absolute top-12'>
                      <h1 className='font-medium text-base mt-8'>CARGAR RUTINA EN PDF</h1>

                    {/* Renderizamos nuestro componente search para buscar nuestros accesorado */}
                      <Search />
                      <section 
                        className={`${ isLoadingFile ? 'px-52  py-9' : '' } pt-9 flex flex-col justify-center mt-14 rounded-sm border-dotted border-2 border-azul shadow-md`}
                        onDrop={ handleFileDrop }
                      >
                        <p className={`font-medium text-sm text-center ${ isLoadingFile ? 'hidden' : 'inline-block'}`}>Suelte su archivo aquí <br /> o </p>
                        <section className=' flex flex-col gap-2'>
                          <input 
                            type="file" 
                            className={`block w-full px-52 pb-9 text-sm text-slate-500 cursor-pointer
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-violet-200 file:text-violet-700
                              hover:file:bg-violet-700 hover:file:text-violet-200
                              ${isLoadingFile ? 'hidden' : 'inline-block'}`}
                            onChange={ handleFileUpload }
                            accept=".pdf"
                            ref={ fileInputRef }
                          /> 
                          <div className="flex justify-center items-center">
                            <img className={`${ isLoadingFile ? 'w-10 mr-2' : 'hidden' }`} src={ pdfIcon } alt="" />
                            { isLoadingFile && <span className='mt-2 text-center text-base text-terciary'>{isLoadingFile.name}</span> } {/* Mostrar el nombre del archivo si existe */}
                          </div>

                        </section>
                      </section>
                      <button
                        className='w-44 mt-14 mb-8 p-2 bg-primary text-xs text-center text-primary rounded-md shadow-md hover:bg-violet-700 hover:text-violet-200'
                        onClick={ handleFileSubmit }
                        disabled={ !isLoadingFile }
                      >
                        Subir archivo
                      </button>
                  </section>
              </div>
            </main>
        </div>
    </>
  )
}
