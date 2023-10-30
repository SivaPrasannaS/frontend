import * as React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useSelector } from 'react-redux';
import Layout from './components/pages/Layout';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import Feedback from './components/pages/Feedback';

function App() {
  const user = useSelector((state) => state.user.userData);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const role = !!user ? user.role : 'CUSTOMER';

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/dressify/auth/login' />} />
        <Route path='/dressify/auth/login' element={<Login />} />
        <Route path='/dressify/auth/register' element={<Register />} />
        <Route
          path='/dressify/*'
          element={
            isAuthenticated ? (
              <Layout>
                <Routes>
                  <Route path='dashboard' element={role === 'ADMIN' ? <Dashboard /> : <Navigate to='/dressify/home' />} />
                  <Route path='home' element={<Home />} />
                  <Route path='products' element={<Product />} />
                  <Route path='cart' element={<Cart />} />
                  <Route path='feedback' element={<Feedback />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to='/dressify/auth/login' />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;