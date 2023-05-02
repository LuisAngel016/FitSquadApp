import { Header, SideBar, Advised } from '../components';
import { users } from '../helpers/data';
import profileImg from '../../assets/img/profileImg.svg';

export const AsesoradosPage = () => {

  return (
    <>
      <div className="flex justify-between">
        <div>
          <SideBar />
        </div>
        <div className="w-10/12 py-4 box-border h-screen">
          <Header />
          <div className='bg-senary flex justify-center items-center font-FitSquad py-12'>
            <div className='bg-white rounded-md top-12'>
            <table className="table-fixed h-full w-full mt-7">
              <thead>
                <tr className='border-b border-gray-500'>
                  <th className="text-md font-bold text-start w-1/4 px-4 py-2">Nombre</th>
                  <th className="text-md font-bold w-1/4 px-4 py-2">Estado</th>
                  <th className="text-md font-bold w-1/4 px-4 py-2">Objetivo</th>
                  <th className="text-md font-bold w-1/4 p-4 py-2">Peso</th>
                </tr>
              </thead>
              <tbody>
                {users.map(( user, index ) => (
                  <Advised key={ user.id } user={ user } img={ profileImg } />
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
