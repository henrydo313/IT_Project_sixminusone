import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Home from './components/Home';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AllocateBook from './components/AllocateBook';
import ReturnBook from './components/ReturnBook';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/manage-books/allocate-book" element={<AllocateBook />} />
        <Route path="/manage-books/return-book" element={<ReturnBook />} />
        <Route path="/aboutUs" element={<AboutUs />}/>
      </Routes>
    </div>
  );
}

export default App;
