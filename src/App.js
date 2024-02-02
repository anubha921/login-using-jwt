import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }></Route>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
