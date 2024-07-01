import './App.css';

//import components
import Navbar, { MiniNavbar } from './Components/Navbar.jsx';
import StateComponent from './Components/State.Components.jsx';
import EventComponent from './Components/Event.Component.jsx';
import CondtionalComponent from './Components/Conditional.Component.jsx';
import ListAndKeyComponent from './Components/ListAndKey.Component.jsx';
import FormHandlingComponent from './Components/FormHandling.Component.jsx';

function App() {
  return (
    <>
      <h1>App . js file</h1>
      <Navbar />
      <MiniNavbar />
      <FormHandlingComponent />
      {/* 
      <ListAndKeyComponent />
      <CondtionalComponent />
      <StateComponent />
      <EventComponent /> 
      */}
    </>
  );
}

export default App;
