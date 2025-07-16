import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Component/PortfolioSection/PortfolioSection.css";
import { Portfolio } from "./Pages/Portfolio";
import { useEffect, useState } from "react";
import { Preloader } from "./Component/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  const waitForImages = () => {
    const images = [...document.images];
    const promises = images.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(res => {
            img.onload = img.onerror = res;
          })
    );
    return Promise.all(promises);
  };

  useEffect(() => {
    const waitAndHide = async () => {
      await waitForImages();

      setTimeout(() => {
        setLoading(false); 
      }, 3000); 
    };

    waitAndHide();
  }, []);

  const handlePreloaderDone = () => {
    setShowPreloader(false); 
  };

  return (
    <BrowserRouter basename="/portfolio">
      {showPreloader ? (
        <Preloader done={handlePreloaderDone} exit={!loading} />
      ) : (
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}


export default App;
