
import './App.css';
import AddEmployee from './components/AddEmployee';
import AddFeedback from './components/AddFeedback';
import AllEmployees from './components/AllEmployees';
import EmployeeFeedbackSystem from './components/EmployeeFeedbackSystem';
import NavBar from './components/NavBar';
import ViewFeedback from './components/ViewFeedback';

import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<EmployeeFeedbackSystem/>} />
          <Route path='/allemp' element={<AllEmployees/>} />
          <Route path='/addemp' element={<AddEmployee/>} />
          <Route path='/addfeed' element={<AddFeedback/>} />
          <Route path='/viewfeed' element={<ViewFeedback/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
