import { AdvisedCard, Header, SideBar } from '../components';
import chartImg from '../../assets/img/image1.png';

import AdvisedNew from '../../assets/icon/Group1.svg';
import AdvisedActive from '../../assets/icon/Group2.svg';
import AdvisedRegistered from '../../assets/icon/Group3.svg';


export const FitSquadPage = () => {

  const advisedCategory = "Nuevos asesorados";
  const advisedNum = "146";

  const advisedCategory2 = "Asesorados activos";
  const advisedNum2 = "627";

  const advisedCategory3 = "Asesorados registrados";
  const advisedNum3 = "1654";

  return (
    <>
      <div className="flex justify-between ">
        <div>
            <SideBar />
        </div>
        <div className="w-10/12 py-4 box-border h-screen overflow-hidden">
          <Header />
          <div className='bg-senary h-full '>
            <div className='bg-senary flex justify-between px-10 items-center mb-12'>
              <AdvisedCard img={ AdvisedNew } advisedNum={ advisedNum } advisedCategory={ advisedCategory }/>
              <AdvisedCard img={ AdvisedActive } advisedNum={ advisedNum2 } advisedCategory={ advisedCategory2 }/>
              <AdvisedCard img={ AdvisedRegistered } advisedNum={ advisedNum3 } advisedCategory={ advisedCategory3 }/>
            </div>
            <div className='bg-senary flex items-center justify-center'>
              <div 
                className='w-full bg-white flex justify-center items-center py-4 rounded-md'
              >
                <img className='w-8/12 h-auto' src={ chartImg } alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
