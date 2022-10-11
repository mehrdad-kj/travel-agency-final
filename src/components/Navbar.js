import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../UserContext'


function Navbar() {

    const context = useContext(UserContext);
    const {
        bucket,
        setBucket,
    } = context;

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light '>
                <div className='container px-4 px-lg-5 d-flex justify-content-between'>
                    <Link to='/' className="navbar-brand" href="#!">Travel Agency</Link> 
                    <div className="" id="navbarSupportedContent">
                        <Link to='/bucket'>
                            <button className="btn btn-outline-dark" type="submit">
                                Bucket
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{bucket}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar