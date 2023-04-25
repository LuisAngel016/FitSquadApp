import { Header, SideBar, Advised } from '../components';
import profileImg from '../../assets/img/profileImg.svg';



export const AsesoradosPage = () => {

  const name = "Lois engel";
  const estado = "Activo";
  const objetivo = "Aumento de masa";
  const peso = "60 Kg";

  return (
    <>

      <div className="flex h-full justify-between">
        <div>
            <SideBar />
        </div>
        <div className="w-10/12 py-4 box-border">
            <Header />
            <div className='bg-senary h-full flex flex-col items-center justify-center font-FitSquad px-10'>
              <div className='w-full bg-white flex justify-center items-center rounded-md'>
              <table class="table-fixed w-full mt-10">
                <thead>
                  <tr className='border-b border-gray-500'>
                    <th class=" text-md font-bold text-start w-1/4 px-4 py-2">Nombre</th>
                    <th class=" text-md font-bold w-1/4 px-4 py-2">Estados</th>
                    <th class=" text-md font-bold w-1/4 px-4 py-2">Objetivo</th>
                    <th class=" text-md font-bold w-1/4 p-4 py-2">Peso</th>
                  </tr>
                </thead>
                <Advised img={ profileImg } name={ name } estado={ estado } objetivo={ objetivo } peso={ peso }/>
                <Advised img={ profileImg } name={ name } estado={ estado } objetivo={ objetivo } peso={ peso }/>
                <Advised img={ profileImg } name={ name } estado={ estado } objetivo={ objetivo } peso={ peso }/>
                <Advised img={ profileImg } name={ name } estado={ estado } objetivo={ objetivo } peso={ peso }/>
              </table>

              </div>
            </div>
        </div>
      </div>


    </>
  )
}
