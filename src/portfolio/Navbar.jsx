import './Navbar.css'
import Aboutme from './About.jsx'
function Navbar() {
    return (<>
        <header>
            <nav className="largeScreenNavbar">
                <div className="titleContainer">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="itemContainers">
                    <a href="#banner">
                        <li className="nav-item">HOME</li>
                    </a>
                    <a href="#detailsContainer">
                        <li className="nav-item">ABOUT US</li>
                    </a>
                    <a href="#projectsContainer">
                        <li className="nav-item">PROJECTS</li>
                    </a>
                    <a href="#contactme">
                        <li className="nav-item">CONTACT</li>
                    </a>
                </div>
            </nav>
            <span className="hamburger" onclick="openSidebar()"><i className="fa-solid fa-bars"></i></span>
            <nav className="sidebar" id="sidebar">
                <span onclick="closeSidebar()"><i className="fa-solid fa-xmark"></i></span>
                <a href="#banner">
                    <li className="nav-item">HOME</li>
                </a>
                <a href="#detailsContainer">
                    <li className="nav-item">ABOUT US</li>
                </a>
                <a href="#projectsContainer">
                    <li className="nav-item">PROJECTS</li>
                </a>
                <a href="#contactme">
                    <li className="nav-item">CONTACT US</li>
                </a>
            </nav>
        </header>
        <section className='bannerImages' id='banner'>
            <img src="/portfolio.jpeg" alt="portfolio" className='bannerImage' />
        </section>
    <Aboutme/>
    </>
    )
}
export default Navbar