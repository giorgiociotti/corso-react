import "./Navbar.css";
import "./Link.jsx";
import Link from "./Link";
function Navbar() {
    return (
        <nav className="navbar">
             <img src="public\Poggio Software 2.png" alt="Logo" className="logo" />
        <ul>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Contatti</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Vino</Link>
            </li>
            <li>
                <Link>Nutella</Link>
            </li>
        </ul>
    </nav>
    );
}
const NavbarV2 = () => {
    //nuovo standard
}

export default Navbar;
