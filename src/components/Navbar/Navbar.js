import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <h1>Kideo</h1>
                    <div className="nav">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="#">À propos</Link></li>
                        <li><Link to="#">Pourquoi ?</Link></li>
                        <li><Link to="#">TOS</Link></li>
                    </div>
                    <Link to="/connexion">Se connecter</Link>
                </ul>
            </nav>
        </div>
    )
}