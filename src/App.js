import './App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteStates';
import { Alert } from './Components/Alert';


function App() {
  return (
    <div>
      <NoteState>
    <Router>
      <Navbar/>
      <Alert message="This is amazing React course" />
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
