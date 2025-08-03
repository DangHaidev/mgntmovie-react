import logo from './assets/logo.svg';
import RoutesConfig from './routes/routes.js';
import Home from './pages/home/index';
import About from './pages/about/index';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import './output.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h1 className="text-3xl font-bold">Hello world!</h1>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
