import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './components/Register';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
