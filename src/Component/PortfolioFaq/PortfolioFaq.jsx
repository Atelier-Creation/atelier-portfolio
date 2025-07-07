import { useState } from 'react';
import './PortfolioFaq.css';

const data = [
  {
    question: "Why choose Atelier Creations over other agencies?",
    answer:
      "Atelier Creations isn’t just another creative agency—we’re a team of strategic thinkers, designers, and developers who blend design innovation with business goals. Our work is rooted in clarity, creativity, and conversion. Whether you're building a brand, launching a website, or running a digital campaign, we ensure every output is polished, purpose-driven, and performance-ready.",
  },
  {
    question: "Are your UI/UX designs accessibility-friendly?",
    answer:
      "Yes. We follow inclusive design principles that prioritize usability for all audiences. Our UI/UX design approach considers readability, color contrast, responsiveness, and user behavior—making websites and apps more accessible, intuitive, and conversion-focused.",
  },
  {
    question: "What services does Atelier Creations offer?",
    answer:
      "Definitely. For clients who need to meet accessibility standards like WCAG 2.1, we ensure your digital product follows the necessary web accessibility guidelines. This includes keyboard navigation, screen reader compatibility, and accessible color schemes—ideal for NGOs, educational platforms, and government-facing applications.",
  },
  {
    question: "What services do you provide?",
    answer:"We provide end-to-end creative and digital solutions, including:<br/> <br/> ● UI/UX Design for Web & Mobile Apps<br/> <br/> ● Responsive Website & App Development<br/> <br/> ● Branding & Identity Design<br/> <br/> ● SEO, SMM, and Performance Marketing<br/> <br/> ● Meta Ads Campaigns & Landing Pages<br/> <br/> ● E-commerce Store Development<br/> <br/> ● Business Website with CMS Integration<br/> <br/>We also provide post-launch support, ensuring your digital assets grow with your brand.",
  },
  {
    question: "What standards and guidelines Equispace follows?",
    answer:
      "Atelier Creations follows best practices in:<br/> <br/> ● Google Core Web Vitals<br/> <br/> ● SEO-ready front-end structures<br/> <br/> ● WCAG & UX accessibility (when required)<br/> <br/> ● Mobile-first responsive design<br/> <br/> ● UI guidelines for iOS & Android<br/> <br/> ● Structured HTML/CSS + clean development<br/> <br/> Everything we create is <Strong>designed to scale, rank, and perform<Strong/>.<br/> <br/>",
  },
];

function PortfolioFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="portfolio-faq-container">
      <h1 className="faq-title">FAQ's</h1>
      <div className="faq-list">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <h4 className="port-folio-faq-question">{item.question}</h4>
              <span className="faq-toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="port-folio-faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }}/>
            )}
            <hr className='faq-hr-tag-portfolio'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioFaq;
