import './OurDesign.css'
import image1 from '../../assets/portfolioGridImage/design.jpg'
import image2 from '../../assets/portfolioGridImage/design1.jpg'
import image3 from '../../assets/portfolioGridImage/design2.jpeg'
import image4 from '../../assets/portfolioGridImage/design3.jpg'
import image5 from '../../assets/portfolioGridImage/design4.jpg'

const data = [
  { id: 1, image: image2, header: "Interior Work", para: "We specialize in interior work that blends functionality with inclusivity, ensuring every space is accessible and adaptive" },
  { id: 2, image: image3, header: "Braille Signs", para: "Our Braille signage is designed to make spaces more accessible, ensuring visually impaired individuals can navigate with ease and confidence." },
  { id: 3, image: image5, header: "PWD Toilet Works", para: "We design PWD-friendly toilets that prioritize accessibility, safety, and comfort, ensuring ease of use for individuals with disabilities" },
  { id: 4, image: image4, header: "Tactile Pathway", para: "Our tactile pathways are designed to make navigation easier and safer, ensuring that visually impaired individuals can move with confidence and independence." },
  { id: 5, image: image1, header: "Renovation Work", para: "Our renovation work incorporates Braille signage, accessible restrooms, and adaptive workspaces, ensuring a seamless and inclusive experience for differently-abled individuals." },
]

function OurDesign() {
  // Group every 2 items
  const rows = []
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2))
  }

  return (
    <div className='our-design-container'>
      <div className='our-design-container-head-text'>
        <h1>How We Make Work Better for Everyone</h1>
        <p>
          We design workspaces that break barriers and foster true inclusivity. From{' '}
          <strong style={{ fontWeight: '600' }}>universal design solutions</strong> to{' '}
          <strong style={{ fontWeight: '600' }}>assistive technology integration</strong>, we ensure every space works for everyone.
        </p>
      </div>

      <div className='our-design-items-wrapper'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`our-design-row ${rowIndex % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          >
            {row.map((item, i) => (
              <div
                key={item.id}
                className={`our-design-container-image ${i === 0 ? 'big' : 'small'}`}
              >
                <img src={item.image} alt={item.header} />
                <div className="overlay" />
                <div className='our-design-container-image-inside-text'>
                  <h3>{item.header}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
            {row.length === 1 && (
                        <div className='black-box'>
          <h1>AND MANY MORE ...</h1>
          <img src='/logo1.svg' alt="logo" style={{filter:'contrast(0.5)'}} />
        </div>
              
            )}
          </div>
        ))}

        {/* Final box at the end */}
      </div>
    </div>
  )
}

export default OurDesign
