import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BarChart  from './components/Chart';
import Calculation from './components/Calculation';
import Chat from './components/Chat';


const App: React.FC = () => {

  return (
    <>
     <Router>
    <Navbar/>
   
   <Routes>
    <Route path='/' element={<Calculation/>}></Route>
    <Route path='/graph' element={<BarChart />}></Route>
    <Route path='/chat' element={<Chat/>}></Route>

    </Routes>

    </Router>
    </>
  );
};



export default App;
