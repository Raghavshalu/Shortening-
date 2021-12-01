import css from './Navbar.css';
function Navbar(){
    return(
            <nav className="navigation">
                <ul className="nav_menu">
                    <li className="large_item">Shortly</li>
                    <li className="item">Features</li>
                    <li className="item">Pricing</li>
                    <li className="item">Resources</li>
                </ul>
                <div className="right_menu">
                <div className="login">Login</div>
                <button className="sign_up">Sign Up</button>
                </div>
            </nav>
    )
}
export default Navbar;