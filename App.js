import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypesExample from './TypesEexample';
import BasicExample from './Navbar';
import ContainerExample from './Example';
import Profile from './bootstrap-header';
import ProfileExample from './Bootstrap-cards';
import Foot from './bootstrap-footer';
import ListExamp from './ListExample';
function App() {
  return (
    <div className="App">
      <Profile/>
      <ProfileExample/>
      <Foot/>
    </div>
  );
}

export default App;
