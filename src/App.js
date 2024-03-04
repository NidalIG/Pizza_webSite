//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './Pages/home';
import Footer from './components/Footer';
import Menu from './Pages/menu';
import {BrowserRouter  , Routes , Route } from 'react-router-dom' ;
import About from './Pages/about';
import Contact from './Pages/contact';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path ="/" exact Component={Home}/>
      <Route path ="/menu" exact Component={Menu}/>
      <Route path ="/about" exact Component={About}/>
      <Route path ="/contact" exact Component={Contact}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
