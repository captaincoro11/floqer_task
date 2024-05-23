import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BarChart  from './components/Chart';
import Calculation from './components/Calculation';


const App: React.FC = () => {

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
