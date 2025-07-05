import React from 'react'
import './PortfolioGrid.css'
import { useNavigate } from 'react-router-dom'
import gridImage1 from '../../src/assets/portfolioGridImage/gridImage1.jpg'
import gridImage2 from '../../src/assets/portfolioGridImage/gridImage2.webp'
export const gridData = [
    {image : gridImage1 , descrip : "TACKTILE INSTALLIZATION-BRAILLE SIGNAGES",head : "IBM RPWD"},
    {image : gridImage2 , descrip : "TACKTILE INSTALLIZATION-BRAILLE SIGNAGES",head : "IBM"},
]
function PortfolioGrid() {
    const navigate = useNavigate()
  return (
    <div className='portfolio-container'>
    <div className='portfolio-grid-container'>
      {gridData.map((data,index)=>(
        <div className='portfolio-grid-content' key={index} onClick={()=>navigate(`/${data.head}`)}>
            <img src={data.image}/>
            <div className='portfolio-grid-content-text'>
                <p>{data.descrip}</p>
                <h1>{data.head}</h1>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default PortfolioGrid
