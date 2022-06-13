import React from 'react';
import './App.css';
import {RoutesComponent} from "./a1-main/b1-ui/routes/RoutesComponent";
import Header from "./a2-features/b5-header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <RoutesComponent/>
        </div>
    );
}

export default App;
