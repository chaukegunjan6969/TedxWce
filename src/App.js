import './assets/app.css';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Speakerinfo from './pages/Speakerinfo';
import Teaminfo from './pages/Teaminfos';
import Footer from './layouts/footer';
import { NavLink, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    <nav>
      <ul>
        <li> <NavLink to = '/'>HOME</NavLink> </li>
        <li> <NavLink to = '/registration'> Registration</NavLink> </li>
        <li> <NavLink to='/Speakerinfo' > Speakerinfo</NavLink> </li>
        <li> <NavLink to='/Teaminfo'> Teaminfo</NavLink></li>
      </ul>
    </nav>
    <Routes>
    <Route path='/' element ={<Footer></Footer>}>
      <Route index element={<Homepage></Homepage>}></Route>
      <Route path ='/registration' element={<Registration></Registration>}></Route>
      <Route path='/Speakerinfo' element={<Speakerinfo></Speakerinfo>}></Route>
      <Route path='/Teaminfo' element = {<Teaminfo></Teaminfo>}></Route>
      {/* <Route path='*' element={<Not><></Route> */}
    </Route>
    </Routes>
    </div>
  );
}

export default App;
