import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;
    const baseUrl = "/mccausland-portfolio/";

    return (
        <>
            <header>
            <h1><Link to="/mccausland-portfolio/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>Maggie McCausland</Link></h1>
                {/* <h1>Maggie McCausland</h1> */}
                <nav>
                    <ul>
                        <li><Link to={`${baseUrl}about`} className={currentPage === "/mccausland-portfolio/about" ? 'nav-link-active' : 'nav-link'}>About Me</Link></li>
                        <li><Link to={`${baseUrl}portfolio`} className={currentPage ===  "/mccausland-portfolio/portfolio"  ? 'nav-link-active' : 'nav-link'}>Portfolio</Link></li>
                        <li><Link to={`${baseUrl}contact`} className={currentPage === "/mccausland-portfolio/contact" ? 'nav-link-active' : 'nav-link'}>Contact</Link></li>
                        <li><Link to={`${baseUrl}resume`} className={currentPage === "/mccausland-portfolio/resume" ? 'nav-link-active' : 'nav-link'}>Resume</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Nav;

