import React from "react";
import Dehaze from "@mui/icons-material/Dehaze";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Navigation() {
    return (
        <>
            {/* Navigation Bar / Header */}
            <div style={{ border: "2px solid red" }}>
                <div>
                    <Dehaze />
                    <ul>
                        <li>Who are we?</li>
                        <li>Work with us</li>
                        <li>Business</li>
                        <li>Events</li>
                    </ul>
                </div>
                <h1>City Sights YYC</h1>
                <div>POINTS</div>
                <div>
                    <AccountCircle />
                </div>
            </div>
        </>
    );
}

export default Navigation;
