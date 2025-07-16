import './OurDesign.css'
import image1 from '../../assets/portfolioGridImage/design.jpg'
import image2 from '../../assets/portfolioGridImage/design1.jpg'
import image3 from '../../assets/portfolioGridImage/design2.jpeg'
import image4 from '../../assets/portfolioGridImage/design3.jpg'
import image5 from '../../assets/portfolioGridImage/design4.jpg'
import favicon from "/logo1.svg";

const data = [
  { id: 1, image: image2, header: "Branding & Identity", para: "We build brands that speak. From logo creation to full-fledged brand guidelines, we craft cohesive visual identities that elevate your presence across print, digital, and physical platforms." },
  { id: 2, image: image3, header: "UI/UX Design", para: "User-first design is at the heart of everything we do. Our UI/UX services focus on creating intuitive, responsive, and visually engaging interfaces for websites, web apps, and mobile platforms." },
  { id: 3, image: image5, header: "Web & App Development", para: "We develop robust, scalable, and SEO-friendly websites and applications that combine great functionality with high performance. Whether you need a business website, portfolio, or e-commerce store, we’ve got you covered." },
  { id: 4, image: image4, header: "Digital Marketing & Meta Ads", para: "Boost your reach with our performance-driven marketing services. From social media strategy and creative content to running Meta Ads (Facebook/Instagram) and Google Ads, we help you get noticed—and get results." },
  { id: 5, image: image1, header: "E-commerce Solutions", para: "End-to-end setup for online stores—from product listing, payment gateways, and shipping integrations to high-converting design layouts and cart optimization. Perfect for D2C brands & startups." },
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
        <h1>Our Services</h1>
        <p>
          Atelier Creations is a multidisciplinary design and development agency offering a strategic mix{' '}
          <strong style={{ fontWeight: '600' }}>of digital, creative, and inclusive space solutions.</strong> From branding and websites to{' '}
          <strong style={{ fontWeight: '600' }}> physical accessibility features</strong>, we deliver purposeful results for modern businesses.
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
          <img src={favicon} alt="logo" style={{filter:'contrast(0.5)'}} />
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
