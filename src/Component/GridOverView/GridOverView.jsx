import { useEffect, useRef } from "react";
import './GridOverView.css'
import image1 from '../../src/assets/portfolioGridImage/gridImage1.jpg'
import image2 from '../../src/assets/portfolioGridImage/image1.jpg'
import image3 from '../../src/assets/portfolioGridImage/image2.jpg'
import image4 from '../../src/assets/portfolioGridImage/image3.jpg'
import { portfolioItems } from "../PortfolioSection/PortfolioSection";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
const images = [image1,image2,image3,image4]
function GridOverView() {
  const location = useLocation();
  const data = location.state?.data;
  const images = data?.imageSrc || [];
    const { projectName } = useParams();
    const navigate = useNavigate();
    const scrollContainer = useRef(null);
    
    useEffect(() => {
        const container = scrollContainer.current;
    
        const onWheel = (e) => {
          if (container) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
          }
        };
    
        container.addEventListener("wheel", onWheel, { passive: false });
    
        return () => container.removeEventListener("wheel", onWheel);
      }, []);
      const currentIndex = portfolioItems.findIndex(item => item.title === projectName);
      const hasNext = currentIndex < portfolioItems.length - 1;
      const nextProject = hasNext ? portfolioItems[currentIndex + 1] : null;
  return (
    <div className='grid-overview-container'ref={scrollContainer}>
      <div className='data-details-section'>
        <h1>{data.title}</h1>
        <div className='data-details-para'>
            <p>{data.about}</p>
            <p>{data.about2}</p>
        </div>
        {data?.service?.length > 0 && (
  <div className='data-sevices'>
    <h4>Services</h4>
    {data.service.map((serviceItem, index) => (
      <p key={index}>{serviceItem}</p>
    ))}
  </div>
)}
  {data?.loc && (
    <div className='data-sevices'>
      <h4>Location</h4>
      <p>{data.loc}</p>
    </div>
  )}
      </div>
      <div className='data-overview-images'>
      <div className='data-overview-images'>
  {images.map((img, index) => (
    <img src={img} key={index} alt={`image-${index}`} />
  ))}
</div>


      </div>
      <div className="grid-overview-connect">
        <h3>Let&apos;s Connect</h3>
        <p>Tell us about your business. Let&apos;s get this conversation started. Fill in the form or send us an email.</p>
        <div className="grid-overview-connect-link">
            <i className="bi bi-arrow-right"></i>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atelierhub.official@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  atelierhub.official@gmail.com
</a>
        </div>
        <hr className="grid-overview-hr-line"/>
        {nextProject ? (
  <>
    <h1>{nextProject.title}</h1>
    <img
      src={nextProject.imageSrc?.[0]}
      alt={nextProject.title}
      style={{ cursor: 'pointer' }}
      onClick={() =>
        navigate(`/${nextProject.title}`, { state: { data: nextProject } })
      }
    />
    <h6
      onClick={() =>
        navigate(`/${nextProject.title}`, { state: { data: nextProject } })
      }
      style={{ cursor: "pointer" }}
    >
      NEXT PROJECT
    </h6>
  </>
) : (
  <h1>AND MANY MORE...</h1>
)}


      </div>

    </div>
  )
}

export default GridOverView
