import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { authContext } from '../Authenticaton/AuthProvider';

const Header = () => {
    const { logout } = useContext(authContext)
    const { user } = useContext(authContext)
    return (
        <>
            <div className="custom-header">
                <div className="header-item">
                    <div className="custom-brand">
                        <Link to="/"><h2>MyStore</h2></Link>
                    </div>
                    <ul className="custom-nav">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link className='cart-icons' to="/cart"><li><LocalMallOutlinedIcon /></li></Link>
                    </ul>
                    {/* {user ? <a onClick={() => { logout() }} style={{ left: '30vw', top: '0', backGoundColor: 'green' }} className='comman-btn'>Logout</a> : <p></p>} */}
                </div>
            </div>
        </>
    )
}

export default Header
