import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './pages/Dashboard.js';
import About from './pages/About.js';
import Analytics from './pages/Analytics.js';
import Comment from './pages/Comment.js';
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import Topbar from './components/Topbar/Topbar';
import Routing from "../src/Content/Routing/Routing"
import UserAddress from "./pages/UserAddress"
import UserProfile from './pages/UserProfile';
const App = () => {
  return (
   <>
  <BrowserRouter>

  <Routing>
  <Topbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytic" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path='/users/profile' element={ <UserProfile/>}> </Route>
          <Route path='/users/address' element={ <UserAddress/>}> </Route>
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>

     </Routing>
    </BrowserRouter>
      </>
  );
};

export default App;