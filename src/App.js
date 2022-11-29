import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './pages/Dashboard.js';
import UserPage from "./pages/UserPage"
import Analytics from './pages/Analytics.js';
import Comment from './pages/Comment.js';
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import Topbar from './components/Topbar/Topbar';
import UserAddress from './pages/UserAddress';
import UserProfile from './pages/UserProfile';


const App = () => {
  return (
   <>
  
      <Topbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytic" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user/address/:userID" element={<UserAddress />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes> 
     </Sidebar>


      </>
  );
};

export default App;