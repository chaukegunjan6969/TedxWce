
import './App.css';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Speakerinfo from './pages/Speakerinfo';
import Teaminfo from './pages/Teaminfos';
import Footer from './pages/Footer'
import Spepageper from './pages/Homepage/SubHomepages/Spepageper';
import Spepageone from './pages/Homepage/SubHomepages/Spepageone';
import Spepagetwo from './pages/Homepage/SubHomepages/Spepagetwo';
import Spepagethree from './pages/Homepage/SubHomepages/Spepagethree';
import Spepagefour from './pages/Homepage/SubHomepages/Spepagefour';
import Speapagefive from './pages/Homepage/SubHomepages/Speapagefive';





import { NavLink, Route, Routes } from 'react-router-dom';





function App() {
  return (

    <div className='App'>

    <nav> 
      <ul  className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-items-end">
        <li> <NavLink to = '/'>HOME</NavLink> </li>
        <li> <NavLink to = '/registration'> Registration</NavLink> </li>
        <li> <NavLink to='/Speakerinfo' > Speakerinfo</NavLink> </li>
        <li><NavLink to='/Teaminfo'> Teaminfo</NavLink></li>
        
      </ul>
    </nav>

    
    <Routes>
      <Route  path='/' element={<Homepage></Homepage>}>
      
      </Route>

      <Route path ='/registration' element={<Registration></Registration>}> </Route>

      <Route path='/Speakerinfo' element={<Speakerinfo></Speakerinfo>}></Route>

      <Route path='/Teaminfo' element = {<Teaminfo></Teaminfo>}></Route>

      <Route path='PERsonal' element={<Spepageper></Spepageper>}></Route>

      <Route path='/speakerone' element={<Spepageone></Spepageone>}></Route>
      <Route path='/speakertwo' element={<Spepagetwo></Spepagetwo>}></Route>
      <Route path='/speakerthree' element={<Spepagethree></Spepagethree>}></Route>
      <Route path='/speakerfour' element={<Spepagefour></Spepagefour>}></Route>
      <Route path='/speakerfive' element={<Speapagefive></Speapagefive>}></Route>

    
    </Routes>

    <Footer></Footer>
      
    </div>
    
  );
}

export default App;
