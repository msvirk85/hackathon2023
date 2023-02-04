import React from "react";
import Search from "@mui/icons-material/Search";
import Navigation from "../Components/Navigation/Navigation";

function Home() {

    

    return (
        <>
        <Navigation/>
        <div>
            <div><input type="text" name="searchBar" /> <Search /></div>
            <div>
                <div>
                    <input
                        type="button"
                        value="Share an activity (Earn Points)"
                    />
                </div>
                <div>
                    <input type="button" value="Explore activities (Filters)" />
                </div>
            </div>
            {/* Remove inline-styling on successful CSS */}
            <div style={{ border: "2px solid black" }}>
                <h3>MAP HERE</h3>
            </div>
        </div>
        </>
    );
}

export default Home;
