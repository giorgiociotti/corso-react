import "./Footer.css"; // Importa il foglio di stile per il footer
import Link from "./Link"; // Assicurati che il componente Link sia disponibile

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Colonna Logo e Descrizione */}
                <div className="footer-left">
                    <img
                        src="public/Poggio Software logo.png"
                        alt="Logo Poggio Software"
                        className="footer-logo"
                    />
                    <p className="footer-description">
                        Poggio Software è una società di gestione dati con sede a Roma, Italia. Il nostro team vi aiuterà in ogni fase del tuo progetto digitale. Noi crediamo che il futuro sia digitale.
                    </p>
                </div>

                {/* Colonne Servizi e Contatti */}
                <div className="footer-links-container">
                    {/* Servizi */}
                    <div className="footer-column">
                        <h3 className="footer-title">Servizi</h3>
                        <ul className="footer-links">
                            <ul>
                                <li><Link to="/data-integration">Data Integration</Link></li>
                                <li><Link to="/data-analytics">Data Analytics</Link></li>
                                <li><Link to="/data-visualization">Data Visualization</Link></li>
                                <li><Link to="/cloud-solutions">Soluzioni Cloud</Link></li>
                                <li><Link to="/software-lifecycle-testing">Software Lifecycle Testing</Link></li>
                                <li><Link to="/web-development">Web Development</Link></li>
                                <li><Link to="/software-development">Sviluppo Software</Link></li>
                                <li><Link to="/innovation-manager">Manager dell'Innovazione</Link></li>
                            </ul>

                        </ul>
                    </div>

                    {/* Contatti */}
                    <div className="footer-column">
                        <h3 className="footer-title">Contattaci</h3>
                        <p>
                            <strong>Sede Operativa:</strong><br />
                            via di casa mia, 104<br />
                            3210 – ROMA (RM) – ITALY
                        </p>
                        <p>
                            <strong>Sede Legale:</strong><br />
                            viale del Poggio divino, 69<br />
                            0123 – ROMA (RM) – ITALY
                        </p>
                        <p>
                            <strong>Email:</strong> info@poggiosoftware.eu<br />
                            <strong>Telefono:</strong> +39 1234567890
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;