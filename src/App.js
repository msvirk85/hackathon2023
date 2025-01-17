import Login from "./Pages/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path= "/" element={<Home />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
