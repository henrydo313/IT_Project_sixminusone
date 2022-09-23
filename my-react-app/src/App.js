import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Home from './components/Home';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AllocateBook from './components/AllocateBook';
import ReturnBook from './components/ReturnBook';
import BookPage from './components/BookPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/manageBooks/allocateBook" element={<AllocateBook />} />
        <Route path="/manageBooks/returnBook" element={<ReturnBook />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
