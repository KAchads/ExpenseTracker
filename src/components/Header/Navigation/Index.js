import React, {useState} from "react"
import {Link} from "react-router-dom";
import Logo from "../../Logo/index"
import Button from "../../Button";
import "./Styles.css"
const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="navbar">
            <div className="inNavbar">
                            <div className="aaa">
                            <Logo/>
                            <i class="far fa-question-circle" 
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}></i>
       {isShown && (
        <div className="what-is-impensa">
          <p><span className="Impensa-span">Impensa</span> - Latin for “Expenditure”. This name has not been registred, it only holds semantic meaning</p>
        </div>
      )}
                            </div>
                            <div className="SuperObamium" className={"nav-options active nav-options"} >
                            <div className="menu-div">
                    </div>
                            <ul id="navbar_ul">
                                <li className="option two">
                                    <Link style={{ textDecoration: 'none' }} to="/SignIn"><Button name="SIGN IN"/></Link>
                                </li>
                                <li className="option three">
                                    <Link style={{ textDecoration: 'none' }} to="/SignUp"><Button name="SIGN UP"/></Link>
                                </li>
                            </ul>
                    </div>
                    </div>
                                    
        </nav>

        
    )
}

export default Navbar
