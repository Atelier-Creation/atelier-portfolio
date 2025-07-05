import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Component/PortfolioSection/PortfolioSection.css";
import { Portfolio } from "./Pages/Portfolio";
import GridOverView from './Component/GridOverView/GridOverView';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/:projectName" element={<GridOverView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
