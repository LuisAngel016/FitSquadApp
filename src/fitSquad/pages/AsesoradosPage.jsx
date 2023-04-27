import { Header, SideBar, Advised } from '../components';
import profileImg from '../../assets/img/profileImg.svg';

export const AsesoradosPage = () => {
  const user = {
    name: 'Lois engel',
    estado: 'Activo',
    objetivo: 'Aumento de masa',
    peso: '60 Kg',
  };

  return (
    <>
      <div className="flex h-full justify-between">
        <div>
          <SideBar />
        </div>
        <div className="w-10/12 py-4 box-border">
          <Header />
          <div className='bg-senary relative flex justify-center items-center h-screen font-FitSquad '>
            <div className='bg-white rounded-md absolute top-12'>
              <table class="table-fixed w-full mt-7">
                <thead>
                  <tr className='border-b border-gray-500'>
                    <th class=" text-md font-bold text-start w-1/4 px-4 py-2">Nombre</th>
                    <th class=" text-md font-bold w-1/4 px-4 py-2">Estados</th>
                    <th class=" text-md font-bold w-1/4 px-4 py-2">Objetivo</th>
                    <th class=" text-md font-bold w-1/4 p-4 py-2">Peso</th>
                  </tr>
                </thead>
                  <Advised img={ profileImg } user={ user }/>
                  <Advised img={ profileImg } user={ user }/>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
