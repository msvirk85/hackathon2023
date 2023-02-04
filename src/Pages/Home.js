import React from "react";
import Dehaze from "@mui/icons-material/Dehaze";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Search from "@mui/icons-material/Search";

function Home() {
    return (
        <div>
            <div>
                <h1>APP NAME</h1>
                <div><AccountCircle/></div>
            </div>

            <input type="text" name="searchBar" /> <Search/>

            <div>
                <Dehaze />
            </div>

            <div>
                <div>Button 1</div>
                <div>Button 2</div>
            </div>

            <div><h3>MAP HERE</h3></div>
        </div>
    );
}

export default Home;
