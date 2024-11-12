import './styles/style.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home";
import {Movies} from "./views/Movies";
import {About} from "./views/About";


function App() {
    return (<div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;