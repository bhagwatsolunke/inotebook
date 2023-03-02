import './App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import About from './Components/About';
import NoteState from './Components/notes/NoteStates';


function App() {
  return (
    <div>
      <NoteState>
    <Router>
      <Navbar/>
      <div className="container">
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about" element={<About/>}/>
     </Routes>
     </div>
     </Router>
     </NoteState>
    </div>

  );
}

export default App;
