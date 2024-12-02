import "./Navbar.css";
import "./Link.jsx";
import Link from "./Link";
function Navbar() {
    return (
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
    );
}

export default Navbar;
