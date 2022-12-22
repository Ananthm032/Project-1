import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './pages/Dashboard.js';
import UserPage from "./pages/UserPage"
import Analytics from './pages/Analytics.js';
import CelebrityNFT from "./pages/CelebrityNFT"
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import Topbar from './components/Topbar/Topbar';
import UserAddress from './pages/UserAddress';
import Router from './Content/Routing/Routing';

const App = () => {
  return (
   <>
  <Router>
      <Topbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/celebrityNFT" element={<CelebrityNFT />} />
          <Route path="/analytic" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/address/:walletAddress" element={<UserAddress />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes> 
       </Sidebar>
      </Router>
      </>
  );
};

export default App;