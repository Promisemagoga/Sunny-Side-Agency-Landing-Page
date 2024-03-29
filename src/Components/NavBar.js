import React from 'react'

function NavBar() {
    return (
        <div className='mainContainer'>
            <div className="m-10">
                <nav className="navbar navbar-expand-lg navbar-dark navItems">
                    <div className="container-fluid nav-container">
                        <div className='logoCOntainer'>
                            <h3 className='logoName'>Sunnyside</h3>
                        </div>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon navBar-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="#" className="nav-item nav-link navLink">About</a>
                                <a href="#" className="nav-item nav-link navLink">Services</a>
                                <a href="#" className="nav-item nav-link navLink">Projects</a>
                                <button className='navBtn'>CONTACT</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar