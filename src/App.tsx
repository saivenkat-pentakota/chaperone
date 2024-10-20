import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Thankyoupage from './components/ThankYouPage/Thankyoupage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<Thankyoupage />} />
      </Routes>
    </Router>
  );
}

export default App;
