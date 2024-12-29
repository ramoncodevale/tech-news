import { MenuIcon, Search } from "lucide-react"
import NavBarSecondary from "./navbar-secondary"

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <MenuIcon color="#fff" />
          <p className="text-white">Menu</p>
        </div>

        <h3 className="text-customText text-2xl font-bold">TECH NEWS</h3>

        <div className="flex items-center gap-2">
          <p className="text-white">Buscar</p>
          <Search color="#fff" />
        </div>
      </div>

      <div>
        <NavBarSecondary />
      </div>
    </>
  )
}

export default NavBar
