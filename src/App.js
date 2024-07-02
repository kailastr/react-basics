import './App.css';

//import components
import Navbar, { MiniNavbar } from './Components/Navbar.jsx';
import StateComponent from './Components/State.Components.jsx';
import EventComponent from './Components/Event.Component.jsx';
import CondtionalComponent from './Components/Conditional.Component.jsx';
import ListAndKeyComponent from './Components/ListAndKey.Component.jsx';
import FormHandlingComponent from './Components/FormHandling.Component.jsx';
import UseEffectComponent from './Components/UseEffect.Component.jsx';

//import routing function 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<EventComponent />} />
        <Route path='home' element={<StateComponent />} />
        <Route path='/useEffect' element={<UseEffectComponent />} />
      </Routes>
    </>
  );
}

export default App;
