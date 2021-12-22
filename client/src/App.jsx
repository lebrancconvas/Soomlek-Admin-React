import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Firstpage from './pages/Firstpage'; 
function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Firstpage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
