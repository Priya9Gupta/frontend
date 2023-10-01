import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import ProductList from './components/ProductList';
import StateManagement from './components/StateManagement';
import Socialpost from './components/Socialpost';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ManageUsers from './components/ManageUsers';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import ManageProducts from './components/ManageProducts';
import UpdateProduct from './components/UpdateProduct';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div>
     <Toaster position="top-right">
      
     </Toaster>
      <BrowserRouter>
      <AppProvider>
        <AnimatePresence>
        {/* we use link on the anchor tag always in react */}
        {/* <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link> */}
        <Navbar />

        {/* all react code used in browserrouter */}
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='Signup' element={<Signup />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='EventHandling' element={<EventHandling />} />
          <Route path='Todo' element={<Todo />} />
          <Route path='ProductList' element={<ProductList />} />
          <Route path='StateManagement' element={<StateManagement />} />
          <Route path='Socialpost' element={<Socialpost />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='ManageUsers' element={<UserAuth> <ManageUsers /></UserAuth>} />
          <Route path='updateuser/:id' element={<UpdateUser />} />
          <Route path='manageproduct' element={<ManageProducts />} />
          <Route path='updateproduct/:id' element={<UpdateProduct />} />


          


        </Routes>
        </AnimatePresence>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
