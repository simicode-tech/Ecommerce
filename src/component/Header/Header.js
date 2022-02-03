import React from "react";

function Header() {
    return ( 
        <div>
            <header className="row">
                <div>
                <a className="brand" href="/">Ecom</a>
                </div>
                <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
                </div>
            </header>
        </div>
     );
}

export default Header;