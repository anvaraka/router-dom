import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <ol>
            {/* <li><Link to={{
                pathname: "/", state: {
                    name: 'customername',
                    category: 'categoryName'
                }
            }}>Home</Link></li> */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/About/iphone300">About</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
        </ol >
    )
}

export default Header