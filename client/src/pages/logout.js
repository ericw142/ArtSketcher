import React from "react";

function Logout() {
    const logout = () => {
        window.location.replace('/')
    }

    return(
        <div className="jumbotron">
        <div className="container">
            <div className="row justify-content-md-center">
            <h3>Are you sure you want to logout?</h3>
            <button className="btn btn-primary" onClick={logout}>Yes</button>
            <button className="btn btn-primary"onClick={logout}>No</button>
        </div>
        </div>
        </div>
    )
}

export default Logout;