import './App.css';
import Overall_Team from './components/Team/Overall_Team';
import MultiActionAreaCard from './materialUI/CardComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import OverAll_Design from './OverAll_Design';
import MainEvents from './components/Events/MainEvents';
import Merchandise from './components/Merchandise/Merchandise';


function App() {
  return (
    <div>
    
    <Router>
           <div className="App">
            <Routes>
                 <Route exact path='/' element={<OverAll_Design />}></Route>
                 <Route  path='team' element={< Overall_Team/>}></Route>
                 <Route  path='events' element={< MainEvents/>}></Route>
                 <Route  path='merchandise' element={< Merchandise/>}></Route>
          </Routes>
         
          </div>
       </Router>
   </div>
  );
}

export default App;
