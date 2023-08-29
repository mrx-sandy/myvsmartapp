import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route from react-router-dom

import Master from './Website/Layout/Master';
import About from './Website/Pages/About';
import Login from './Website/Authantication/Login';
import Shop from './Website/Pages/Shop';
import Register from './Website/Authantication/Register';
import Blog from './Website/Pages/Blog';
import Banking from './Website/Pages/Banking';
import Legel from './Website/Pages/Legel';
import ShopPage from './Website/Pages/ShopPage';
import Home from './Website/MainComponent/Home';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/home' element={<Master Rcf={Home}/>}></Route>
  <Route path='/about'  element={<Master Rcf={About}/>  }/>
  <Route path='/login'  element={<Login />}/>  
    <Route path='/shop'  element={<Master Rcf={Shop}/>  }/>
  <Route path='/register' element={<Register/>  }/>  
  <Route path='/blog'  element={<Master Rcf={Blog}/>  }/>
  <Route path='/banking'  element={<Master Rcf={Banking}/>  }/>
  <Route path='/legel'  element={<Master Rcf={Legel}/>  }/>
  <Route path='/shoppage'  element={<Master Rcf={ShopPage}/>  }/>
  <Route path='/'  element={<Master Rcf={Home}/>  }/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
