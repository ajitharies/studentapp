import logo from './logo.svg';
import './App.css';

import View2 from './components/View2';
import Navbar1 from './components/Navbar1';
import { Route, Routes } from 'react-router-dom';
import Add1 from './components/Add1';

function App() {
  return (
    <div className="App">
     <Navbar1/>
      <Routes>
        <Route path='/' element={<View2/>}/>
        <Route path='/add' element={<Add1
        data={{id:'',name:'',grade:''}} method="post"/>}/>
      </Routes>
 


    </div>
  );
}

export default App;
