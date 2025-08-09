import Home from './pages/home/index';
import About from './pages/about/index';
import './App.css';
import CreateMoviePage from '@/pages/home/CreateMoviePage';
import EditMoviePage from '@/pages/home/EditMoviePage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <div>
                    {/* <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav> */}
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/create-movie"
                            element={<CreateMoviePage />}
                        />
                        <Route
                            path="/edit-movie/:id"
                            element={<EditMoviePage />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
