import './App.css';
import Main from './Layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main/>}></Route> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
