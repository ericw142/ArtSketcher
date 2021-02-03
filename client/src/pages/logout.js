import React from "react";

function Logout() {
    const logout = () => {
        window.location.replace('/')
    }

    return(
        <div className="container">
            <h3>Are you sure you want to logout?</h3>
            <button onClick={logout}>Yes</button>
        </div>
    )
}

export default Logout;