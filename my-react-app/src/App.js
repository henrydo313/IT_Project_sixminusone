import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
