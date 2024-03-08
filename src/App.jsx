import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header";
import MainComponent from "./components/LandingPage/Home/MainComponent";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
