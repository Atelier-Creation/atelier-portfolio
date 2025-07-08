import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Component/PortfolioSection/PortfolioSection.css";
import { Portfolio } from "./Pages/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
