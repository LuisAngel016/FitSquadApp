import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar"


// const drawerWidth = 240;

export const FitSquadPage = () => {
  return (
    <section className="flex">

        <SideBar /* drawerWidth={ drawerWidth } */ />

        <section className="m-10">
          <NavBar /* drawerWidth={ drawerWidth } */ />


          <h1>FitSquadPage</h1>

        </section>


    </section>
  )
}
