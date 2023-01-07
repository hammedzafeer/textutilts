import './Nav.css';

function Nav(props) {

    return (
        <>
            {/* <nav className="nav-container nav-dark">
                <ul className='nav-list'>
                    <li><a href="/">TextUtilty</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">about</a></li>
                </ul>
                <div className='nav-switch'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="bluedark" />
                        <label className="form-check-label" htmlFor="bluedark">Blue Dark Mode</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="dark" />
                        <label className="form-check-label" htmlFor="dark">Dark Mode</label>
                    </div>
                </div>

            </nav> */}
            <nav className={`navbar bg-${props.mode} navbar-expand-lg `}
             data-bs-theme={props.mode === "primary" || props.mode === "dark" ? "dark" : "light"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>

                        </ul>
                        <div className={`form-check form-switch px-4 ${props.mode === "dark"? 'disable' : "active"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="bluedark" onClick={props.BlueToggle}/>
                            <label className={`form-check-label color-${props.mode}`} htmlFor="bluedark">{props.mode === "primary" ? "Light": "Blue Dark"} Mode</label>
                        </div>
                        <div className={`form-check form-switch px-4 ${props.mode === "primary" ? 'disable' : "active"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="dark" onClick={props.toggle}/>
                            <label className={`form-check-label color-${props.mode}`} htmlFor="dark" >{props.mode === "dark" ? "Light": "Dark"} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;