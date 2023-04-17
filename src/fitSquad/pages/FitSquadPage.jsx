import { Header, SideBar } from "../components"


export const FitSquadPage = () => {
  return (
    <>

      <div className="flex justify-between">
        <div className="">
            <SideBar />
        </div>
        <div className="w-10/12 py-4 box-border">
            <Header />
        </div>
      </div>


    </>
  )
}
