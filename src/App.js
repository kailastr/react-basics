import './App.css';

//import components
import Navbar, { MiniNavbar } from './Components/Navbar.jsx';
import StateComponent from './Components/State.Components.jsx';
import EventComponent from './Components/Event.Component.jsx';

function App() {
  return (
    <>
      <h1>App . js file</h1>
      <Navbar />
      <MiniNavbar />
      <StateComponent />
      <EventComponent />
    </>
  );
}

export default App;
