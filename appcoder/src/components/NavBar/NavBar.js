import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = ({titulo}) => {
    return (
        <nav className="navbar navbara">
            <ul>
                <li className="li">
                    <a className="a" href="https://www.google.com/">ACQUA</a>
                </li>
            </ul>
            <ul>
            <li className="li">
                    <a className="a" href="https://www.ole.com.ar/">PET</a>
                </li>
            </ul>
            <h2 className="h2">ACQUAPET</h2>
            <CartWidget/>
        </nav>
    )
}

export default NavBar