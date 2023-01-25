import Home from './components/pages/Home';
import NewPlayer from './components/pages/NewPlayer';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route
            path='/new-player'
            element={<NewPlayer />}
          />
        </Routes>
      </main>

      {/* could have footer */}
    </Router>
  );
}

export default App;
