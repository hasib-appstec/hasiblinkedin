import React from 'react'
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Error from './components/Error';
import {BrowserRouter} from 'react-router-dom';
// import {Routes} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import FeedOption from './components/FeedOption';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route path='/' index element={<Login />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/navbar' index element={<Navbar />} />

          <Route path='/feed' index element={<Feed />} />
          {/* </Route> */}
          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
