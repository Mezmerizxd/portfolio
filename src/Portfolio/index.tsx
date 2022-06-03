import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles.scss';

// Components
import Home from './Home';

const Portfolio = () => {
    return (
        <div className="Application-container">
            <div className="Portfolio">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default Portfolio;
