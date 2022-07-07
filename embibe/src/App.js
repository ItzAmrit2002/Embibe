import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './components/Register';
import { Navigate } from 'react-router-dom';
import CreatePaper from './components/CreatePaper';
import ViewPapers from './components/ViewPapers';
import StudentStats from './components/StudentStats';
import AdminDashboard from './components/AdminDashboard';
import AddQuestion from './components/AddQuestion';
import StudentDashboard from './components/StudentDashboard';
import { RequireAuth } from './auth/requireAuth';
import useAuth from './hooks/useAuth';
import CreateQues from './components/CreateQues';
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
        {auth.admin && <Route path="/createpaper" element= {<CreatePaper/>} />}
        {auth.admin && <Route path = '/addquestion' element={<AddQuestion/>} />}
        {auth.admin && <Route path = '/addquestion/:id' element={<CreateQues/>} />}
        {auth.admin && <Route path="/viewpaper" element={<ViewPapers/>} />}
        {auth.admin && <Route path="/stats" element={<StudentStats/>} />}
        
        <Route path="*" element={<Navigate to={auth.email? '/student' : 'login'}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
