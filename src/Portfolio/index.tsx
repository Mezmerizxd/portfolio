import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles.scss';

// Components
import Home from './Home';

const Portfolio = () => {
    return (
        <div className="Application-container">
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Portfolio;
