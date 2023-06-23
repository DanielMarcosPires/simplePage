import { PropsWithChildren } from "react"
import "./css/style.css"
import { Link } from "react-router-dom"
import {AiOutlineSearch,AiFillCloud} from "react-icons/ai"
import {BiSolidBell} from "react-icons/bi"
export default function Layout({children}:PropsWithChildren) {
  return (
    <div className="window">
      <header className="windowHeader">
        <div>
         <span className="ball"></span>
         <span className="ball"></span>
         <span className="ball"></span>
        </div>
        <ul>
          <li>
            <nav className="windowHeader__Link">
              <Link className="windowHeaderLink" to={"#"}>Apps</Link>
              <Link className="windowHeaderLink" to={"#"}>Your work</Link>
              <Link className="windowHeaderLink" to={"#"}>Discover</Link>
              <Link className="windowHeaderLink" to={"#"}>Market</Link>
            </nav>
            <form className="windowForm" action="">
                <AiOutlineSearch className="icon"/>
              <input type="search"  placeholder="Search" />
            </form>
          </li>
          <div className="windowIcons"> 
            <BiSolidBell className="icon"/>
            <AiFillCloud className="icon"/>
          </div>
        </ul>
      </header>
      {children}
    </div>
  )
}
