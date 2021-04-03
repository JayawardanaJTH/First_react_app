import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (  
        <div className="container-fluid bg-dark text-white p-2">
            <div className="row">
                <div className="col-md-6">
                    <h4>Abhiru</h4>
                </div>
                <div className="col text-center">
                    <input type="button" value="Login" className="btn btn-primary"/>
                    <span> OR </span>
                    <input type="button" value="Register" className="btn btn-info"/>
                </div>
            </div>
        </div>
    );
}
 
export default Header;