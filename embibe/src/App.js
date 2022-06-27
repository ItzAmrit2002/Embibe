import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './components/Register';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import { RequireAuth } from './auth/requireAuth';
import useAuth from './hooks/useAuth';
function App() {
  const {auth} = useAuth();
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {auth.admin && <Route path="/admin" element={<AdminDashboard/>} />}
        {auth.email && <Route path="/student" element={<StudentDashboard/>} />}
        
        
        <Route path="*" element={<Navigate to={auth.email? '/student' : 'login'}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
