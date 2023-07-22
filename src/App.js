
import './App.css';
import './My.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Menu from  './Component/Menu';
import Gallery from './Component/Gallery';
import Restaurant from './Component/Restaurant';
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Footer from './Component/Footer';
import Login from './Component/Login';
import Blogdetails from './Component/Blogdetails';
function App() {
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} >
      <Route path='/header' element={<Header/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/restaurant' element={<Restaurant/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/blogdetails' element={<Blogdetails/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
