import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
//import Header from './components/Header'

function App() {
  return (
    <div className="App body">
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
    </div>
  );
}

export default App;
