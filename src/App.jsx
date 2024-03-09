import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
