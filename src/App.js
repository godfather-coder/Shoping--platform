import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login'
import Regist from './Pages/registration';
import Category from './Pages/categ';
import Prime from './Pages/prime';
import Aboutus from './Pages/Aboutus';
import Foryou from './Pages/foryou';
import Navbar from './Components/Navigationbar/navbar';
import Blog from './Pages/Bolg';
import Help from './Pages/Help';
import Why from './Pages/Why';
import Best from './Pages/Best';
import Sale from './Pages/Sale';
import Delivery from './Pages/Delivery';
import Working from './Pages/Working';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Georgia from './Pages/Georgia';
import Usa from './Pages/Usa';
import Germany from './Pages/Germany';
import China from './Pages/China';
import Footer from './Components/FooterMenu/footer';
import Fees from './Pages/Fees';
import Off from './Pages/Off';
function App() {
  return (
    <Router>
      <div className='App' ><Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/log-in' element={<Login/>} />
          <Route path ='/sign-up' element={<Regist/>} />
          <Route path = '/category' element={<Category/>}/>
          <Route path = '/prime' element = {<Prime/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path ='/foryou' element={<Foryou/>}/>
          <Route path ='/blog' element={<Blog/>}/>
          <Route path = '/company' element={<Aboutus/>}/>
          <Route path ='/help' element= {<Help/>}/>
          <Route path = '/why' element = {<Why/>}/>
          <Route path = '/froyou' element = {<Foryou/>}/>
          <Route path = '/bestselers' element={<Best/>}/>
          <Route path = '/sales' element={<Sale/>}/>
          <Route path = '/delivery' element={<Delivery/>}/>
          <Route path = '/work' element={<Working/>}/>
          <Route path  = '/privacy' element={<Privacy/>}/>
          <Route path = '/terms' element = {<Terms/>}/>
          <Route path = '/georgia' element ={<Georgia/>}/>
          <Route path = '/usa' element ={<Usa/>}/>
          <Route path = '/china' element ={<China/>}/>
          <Route path = '/germany' element ={<Germany/>}/>
          <Route path = '/fee' element ={<Fees/>}/>
          <Route path='/dayoff'  element={<Off/>}/>
        </Routes><Footer/>
      </div>
    </Router>
  );
}
export default App;