import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/home/home';
import Nifty from './pages/nifty50/nifty50';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/nifty' element={<Nifty/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
