import { Header, SideBar } from '../components';

export const CalendarioPage = () => {
  return (
    <>
        <div className="flex justify-between">
            <div>
                <SideBar />
            </div>
            <div className="w-10/12 py-4 box-border">
                <Header />
                <div className='bg-senary h-full'>
                    <h1>Calendario</h1>
                </div>
            </div>
        </div>
    </>
  )
}