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



function App() {
  return (
    <div>

      <BrowserRouter>
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
          <Route path='ManageUsers' element={<ManageUsers />} />

          


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
