import React, { useState } from 'react';
import './PortfolioFaq.css';

const data = [
  {
    question: "Why Equispace not other company?",
    answer:
      "Equispace is purpose-built to create inclusive, accessible workspaces tailored for individuals with disabilities — a rare commitment in today’s market. We prioritize comfort, dignity, and equal opportunity in every corner of our design.",
  },
  {
    question: "You have licence for RPWD works?",
    answer:
      "Yes, we have the necessary license and full compliance to undertake works under the Rights of Persons with Disabilities (RPWD) Act.",
  },
  {
    question: "Will you provide Compliance certificate as per MOUD approved?",
    answer:
      "Yes, we will provide a Compliance Certificate as per the Ministry of Urban Development (MOUD) approved guidelines.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide comprehensive accessible infrastructure design services, including inclusive architecture and interior design, accessibility audits and retrofitting, and expert consultation to ensure compliance with the RPWD Act and NBC 2016 guidelines. Our services also cover the design and implementation of signage and wayfinding solutions, along with complete assistance in preparing and obtaining compliance documentation and certification.",
  },
  {
    question: "What standards and guidelines Equispace follows?",
    answer:
      "Equispace strictly adheres to the Rights of Persons with Disabilities (RPWD) Act, 2016, the National Building Code (NBC) 2016, and Harmonised Guidelines and Standards for Universal Accessibility (2021) issued by the Ministry of Housing and Urban Affairs (MoHUA), Government of India. These standards ensure that all infrastructure and design solutions we provide are inclusive, safe, and accessible to persons with disabilities.",
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
              <p className="port-folio-faq-answer">{item.answer}</p>
            )}
            <hr className='faq-hr-tag-portfolio'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioFaq;
