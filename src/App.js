import './App.css';
import Nav from './components//Nav'
import Footer from './components/Footer'
import Signup from './components/SignUp'
import Login from './components/Login'
import AddProduct from './components/AddProduct'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  // const user=localStorage.getItem('user')
  return (
    <div className="App">
    <BrowserRouter>
      <ToastContainer />
      
      <Nav />
      <Routes>
        <Route path="/" element={<h1>This is Homepage</h1>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>Update product Component</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        <Route path="/profile" element={<h1>Profile Component</h1>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    
    </div>
  );
}

export default App;
