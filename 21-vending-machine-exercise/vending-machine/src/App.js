import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Chips from "./Chips"
import Peanuts from "./Peanuts";
import Soda from "./Soda";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/chips"> Chips </NavLink>
                    <NavLink to="/nuts"> Peanuts </NavLink>
                    <NavLink to="/soda"> Soda </NavLink>
                </nav>
                <Routes>
                    <Route exact path="/" element={<VendingMachine />} />
                    <Route exact path="/chips" element={<Chips />} />
                    <Route exact path="/nuts" element={<Peanuts />} />
                    <Route exact path="/soda" element={<Soda />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
