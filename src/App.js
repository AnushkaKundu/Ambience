import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Weather" element={<Weather/>}></Route>
    </Routes>
  )
}
export default App;
