import React from 'react';

const Navbar =()=>{

    return(
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: 'white' }}>
                <ul
                style={{
                    marginLeft: '20px',
                    fontSize: '16px',
                }}
                className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="d-flex">
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/">
                            <span className="d-none d-md-inline"> Home </span>
                        </a>
                    </li>
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/about">
                            <span className="d-none d-md-inline"> About Us </span>
                        </a>
                    </li>
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/contacts">
                            <span className="d-none d-md-inline"> Contacts </span>
                        </a>
                    </li>
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/clients">
                            <span className="d-none d-md-inline"> Clients </span>
                        </a>
                    </li>
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/awards">
                            <span className="d-none d-md-inline"> Awards </span>
                        </a>
                    </li>
                    <li className="nav-item" style={{ paddingRight: '10px' }}>
                        <a className="nav-link active" href="/services">
                            <span className="d-none d-md-inline"> Services</span>
                        </a>
                    </li>

                </div>
                </ul>
            </nav>
        </>
        
    )
}
export default Navbar;