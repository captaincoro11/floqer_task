import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {Spin} from 'antd'
import MainTable from './components/MainTable';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BarChart  from './components/Chart';
import MyContext from './context/context';
import Calculation from './components/Calculation';


const App: React.FC = () => {
  const context:any = useContext(MyContext)

  const {calculation , setCalculation} = context




  return (
    <>
    <Navbar/>
    <Router>
   <Routes>
    <Route path='/' element={<Calculation/>}></Route>
    <Route path='/graph' element={<BarChart />}></Route>

    </Routes>

    </Router>
    </>
  );
};



export default App;
