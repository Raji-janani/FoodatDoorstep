
const Header = ()=>{
    return(
        <div className="header">
            <div className="headerLogo">
                <img className="logo" src={require("./images/food-logo.png")}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;