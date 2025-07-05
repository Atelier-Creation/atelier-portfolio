import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from '@studio-freight/lenis';
import { useNavigate } from "react-router-dom";
import "./PortfolioSection.css";
import image1 from '../../assets/portfolioGridImage/New folder/i1.png'
import image2 from '../../assets/portfolioGridImage/New folder/i2.png'
import image3 from '../../assets/portfolioGridImage/New folder/i3.png'
import image4 from '../../assets/portfolioGridImage/New folder/i4.png'
import image5 from '../../assets/portfolioGridImage/New folder/i5.png'
import image6 from '../../assets/portfolioGridImage/New folder/i6.png'
import image7 from '../../assets/portfolioGridImage/New folder/i7.png'
import image8 from '../../assets/portfolioGridImage/New folder/i8.png'
import image9 from '../../assets/portfolioGridImage/New folder/i9.png'
import image10 from '../../assets/portfolioGridImage/New folder/i10.png'
import image11 from '../../assets/portfolioGridImage/New folder/i11.png'
import image12 from '../../assets/portfolioGridImage/New folder/i12.png'
import image13 from '../../assets/portfolioGridImage/New folder/i13.png'
import image14 from '../../assets/portfolioGridImage/New folder/i14.png'
import image15 from '../../assets/portfolioGridImage/New folder/i15.png'
import image16 from '../../assets/portfolioGridImage/New folder/i16.png'
import image17 from '../../assets/portfolioGridImage/New folder/i17.png'
import image18 from '../../assets/portfolioGridImage/New folder/i18.png'
import image19 from '../../assets/portfolioGridImage/New folder/i19.png'
import image20 from '../../assets/portfolioGridImage/New folder/i20.png'
import image21 from '../../assets/portfolioGridImage/New folder/i21.png'
import image22 from '../../assets/portfolioGridImage/New folder/i22.png'
import image23 from '../../assets/portfolioGridImage/New folder/i23.png'
import image24 from '../../assets/portfolioGridImage/New folder/i24.png'
import image25 from '../../assets/portfolioGridImage/New folder/i25.png'
import image26 from '../../assets/portfolioGridImage/New folder/i26.png'
import image27 from '../../assets/portfolioGridImage/New folder/i27.png'
import image28 from '../../assets/portfolioGridImage/New folder/i28.png'
import image29 from '../../assets/portfolioGridImage/New folder/i29.png'
import image30 from '../../assets/portfolioGridImage/New folder/i30.png'
import image31 from '../../assets/portfolioGridImage/New folder/i31.png'
import image32 from '../../assets/portfolioGridImage/New folder/i32.png'
import image33 from '../../assets/portfolioGridImage/New folder/i33.png'
import image34 from '../../assets/portfolioGridImage/New folder/i34.png'
import image35 from '../../assets/portfolioGridImage/New folder/i35.png'
import image36 from '../../assets/portfolioGridImage/New folder/i36.png'
import image37 from '../../assets/portfolioGridImage/New folder/i37.png'
import image38 from '../../assets/portfolioGridImage/New folder/i38.png'
import image39 from '../../assets/portfolioGridImage/New folder/i39.png'
import image40 from '../../assets/portfolioGridImage/New folder/i40.png'
import image41 from '../../assets/portfolioGridImage/New folder/i41.png'
import image42 from '../../assets/portfolioGridImage/New folder/i42.png'
import image43 from '../../assets/portfolioGridImage/New folder/i43.png'
import image44 from '../../assets/portfolioGridImage/New folder/i44.png'
import image45 from '../../assets/portfolioGridImage/New folder/i45.png'
import image46 from '../../assets/portfolioGridImage/New folder/i46.png'
import image47 from '../../assets/portfolioGridImage/New folder/i47.png'
import image48 from '../../assets/portfolioGridImage/New folder/i48.png'


gsap.registerPlugin(ScrollTrigger);


const backgroundStrips = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2ea74d38dd08c3e6cf_1.svg",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2e45a7790d44e9faea_2.svg",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2fef5490651bfbb1cb_3.svg",
  },
  {
    id: 4,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d30986922e0ab39cd2c_4.svg",
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d300301f06cf862925c_5.svg",
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d31aa3205022403149e_6.svg",
  },
  {
    id: 7,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 8,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 9,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 10,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32b4d1c9b50fdfc83f_8.svg",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Trigun Studio",
    category: "Architecture",
    imageSrc:[image1,image2,image3],
    link: "https://www.trigunstudio.com/",
    about : "At Trigun Studio, we redefine design to create a better future with every project. Our passionate team blends creativity, innovation, and functionality, delivering exceptional architecture and interiors that exceed client expectations and transform every space into a true masterpiece.",
    about2 :"Trigun Studio offers exceptional interior design that seamlessly blends creativity with functionality. We ensure that every space is visually stunning and highly practical. We specialize in residential and commercial project designs.",
    service :["Architecture","Interior"],
    loc:"19, Sivathangam Nagar,Vilankurichi Road,Coimbatore - 641035"
  },
  {
    id: 2,
    title: "Tuneaethetics",
    category: "Skin Rejuvenation",
    imageSrc:[image4,image5,image6],
    link: "https://tuneaesthetics.com/",
    about : "Our clinical experts at Tune are dedicated professionals committed to delivering exceptional care. With extensive experience in dermatology and skin and hair care, our team provides personalized treatment plans tailored to your needs. From diagnosing skin conditions to offering innovative solutions, they guide you towards optimal health and beauty. With compassion and expertise, our experts ensure you receive the highest standard of care. Trust in our team to help you achieve your skin and hair care goals. Experience the difference with Tune’s renowned clinical experts leading the way.",
    service :["Skin Rejuvenation","Anti-aging","Acne Scars","Body Skin","Hair Re-Growth"],
    loc:"9, Seshadri Rd,Venus Colony,Alwarpet,Chennai– 600018."
  },
  {
    id: 3,
    title: "Designroots3d",
    category: "3D printing",
    imageSrc:[image7,image8,image9],
    link: "https://www.designroots3d.com/",
    about : "Design Roots, based in Jalahalli, Bangalore, is a leading name in India’s additive manufacturing sector. We offer a full spectrum of services, including rapid prototyping, reverse engineering, CNC machining, vacuum casting, and molding, ensuring functional, reliable, and production-ready parts across India.",
    about2 :"Catering to both established industries and startups, we serve sectors such as automotive, electronics, healthcare, aerospace, education, jewelry making, and consumer goods.",
    service :["3D printing","Vacumm Casting Machine","CNC Machining,Injection modeling"],
    loc:"No.3, 3rd Cross Rd, Sharadamba Nagar,Jalahalli, Bengaluru Karnataka - 560013"
  },
  {
    id: 4,
    title: "Beingsocial",
    category: "Search Engine Optimization",
    imageSrc:[image10,image11,image12],
    link: "https://www.beingsocialmedia.com/",
    about : "Being Social is a leading digital marketing agency in Mumbai specializing in marketing innovation. We offer a comprehensive suite of services to brands, organizations, small and medium-sized enterprises, and startups. Specializing in branding, video creation, content writing, SEM, SEO, SMO, and SMM, we are committed to elevating your business to the next level.",
    service :["Search Engine Optimization","Content Creation","Website Development "],
    loc:"No - 1/A/5, Sindhi Colony,Opp. Gurukripa Hotel,Sion West, Mumbai,Maharashtra 400022, India"
  },
  {
    id: 5,
    title: "Industro Venture",
    category: "Career Development & Placement Training",
    imageSrc:[image13,image14,image15],
    link: "https://www.industroventure.com/",
    about : "At Industro Venture, we are leading the transformation of education by blending cutting-edge technology with community-driven passion. Our focus is on redefining how education meets industry, creating pathways where students excel, institutions grow, and innovation thrives.",
    about2 :"To inspire and empower the next generation with the skills, resources, and environments needed to lead in a rapidly evolving world.",
    service :["Corporate Training","Career Development & Placement Training","Ignite Hubs & Ignite Labs","Campus 360 Solutions"],
    loc:"Hosabasavanapura, Bangalore"
  },
  {
    id: 6,
    title: "Mayon Foundations",
    category: "Available To Impartial",
    imageSrc:[image16,image17,image18],
    link: "https://www.mayonfoundations.com/",
    about : "Quality with high-end technology gives our customers total value for their money. Quality is a way of life. We pack quality and luxury into every square foot of construction.",
    about2 :"Our success as a real estate builder has been built on the personal referral of business from past satisfied clients, tenants, and landlords, together with our outstanding reputation and credibility.",
    service :["available to impartial","unbiased people","culture","social background"],
    loc:"S.F No. 1/120/A1,Athipalayam,Coimbatore - 641 110"
  },
  {
    id: 7,
    title: "Keva Clinic",
    category: "Skin Care Treatments",
    imageSrc:[image19,image20,image21],
    link: "https://www.kevaclinic.com/",
    about : "Keva is Coimbatore's best Skin and hair care clinic. Our skilled team specializes in skin lightening, tightening, and acne treatments, along with advanced hair loss and Hair PRP treatments. As the top skin and hair care clinic in Coimbatore, we take pride in offering expert services tailored to your individual needs.",
    about2 :"Our dermatologists provide personalized guidance and use advanced techniques to ensure the best outcomes for your Skin and hair.",
    service :["Skin Care Treatments","Body Care Treatments","Hair Care Treatments"],
    loc:"No:93, 1st Floor,Sri Narasimhha Chambers, TV Swamy Road,West RS Puram, Coimbatore,Tamil Nadu - 641 002."
  },
  {
    id: 8,
    title: "Golden Gateway",
    category: "Overseas Education",
    imageSrc:[image22,image23,image24],
    link: "https://www.goldengatewayedu.com/",
    about : "Golden Gateway provides complete career opportunities for overseas education. We help students study in the United Kingdom, the United States, Germany, Australia, New Zealand, Canada, and other countries. We will provide you with career counseling, language coaching, and help with visas and documentation. Start your study abroad journey at your preferred place with the counselors' expert guidance and assistance. Join us for a counseling session today!",
    service :["Overseas Education","GMAT Coaching","Language Coaching","Technical Course"],
    loc:"No.47, BK Ranganathan Street,New Sidhapuddur, Gandhipuram,Coimbatore - 641 044."
  },
  {
    id: 9,
    title: "Sushruta",
    category: "Filler Injection",
    imageSrc:[image25,image26,image27],
    link: "https://www.sushruta.in/",
    about : "Sushruta means 'The Father of Indian Surgery.' Sushruta (also called Susruta or Sushrutha) (6th century BC) was an Indian surgeon who wrote the book Sushruta Samhita, in which he details over 120 surgical equipment, 300 surgical procedures, and categorizes human surgery into eight categories. Around 2600 years ago, the doctor and his colleagues performed numerous surgeries.",
    service :["Filler Injection","Botox Injection","Rhinoplasty/Nose Job","Male Breast Reduction"],
    loc:"No. 181, Link Road,G.V. Residency,Uppilipalayam,Coimbatore - 641015,Tamilnadu, India"
  },
  {
    id: 10,
    title: "Bluestone",
    category: "Jewellery",
    imageSrc:[image28,image29,image30],
    link: "https://www.bluestone.com/",
    about : "Established in 2011, BlueStone is India leading destination for high quality fine jewellery with strikingly exquisite designs. We aim at revolutionizing the fine jewellery and lifestyle segment in India with a firm focus on craftsmanship, quality and customer experience. In a short span of time, BlueStone has built a large family of loyal consumers in India and abroad.",
    about2 :"We house more than 8000 unique designs for you to choose from. All these designs are crafted to perfection with utmost care giving you the flexibility to customize the product's gold purity and colour or diamond clarity to suit your needs.",
    service :["Men's Jewellery","Rings for Men","Earrings for Men"],
    loc:"BlueStone Jewellery and Lifestyle LimitedNo 89/2, Munnekolala, Marathalli Outer Ring Road, Marathahalli, Bangalore 560037, Karnataka, India"
  },
  {
    id: 11,
    title: "Nirvana",
    category: "Jewellery",
    imageSrc:[image31,image32,image33],
    link: "https://nirvanagemsandjewels.com",
    about : "Great things are on the horizon",
    about2 :"Something big is brewing! Our store is in the works and will be launching soon!",
    service :["Rings","Earings","Bangles"],
    loc:"B-144A, First Floor, Mangal Marg, Bapu Nagar, Near Colorbox, Jaipur-302012, Rajasthan, India."
  },
  {
    id: 12,
    title: "Candere",
    category: "Jewellery",
    imageSrc:[image34,image35,image36],
    link: "https://www.candere.com",
    about : "Candere started off as a digital start-up with the vision of making the luxury of diamonds accessible and attainable for the modern consumer. What began as an online platform quickly evolved into a beloved e-commerce brand, celebrated for its stylish and contemporary designs offered at an affordable price point.",
    about2 :"Kalyan Jewellers, a name synonymous with trust in the Indian jewellery industry, acquired Candere in 2017.This strategic partnership allowed Candere to expand its operations across more postcodes, bringing our distinctive collections closer to customers across the nation and beyond.",
    service :["Rings","Earings","Bangles"],
    loc:"19, Sivathangam Nagar,Vilankurichi Road,Coimbatore - 641035"
  },
  {
    id: 13,
    title: "Goat-Robotics",
    category: "Intra logistics GT",
    imageSrc:[image37,image38,image39],
    link: "https://www.goat-robotics.com",
    about : "Goat Robotics is the best automation company in Coimbatore and specializes in providing comprehensive, innovative, autonomous robotics solutions tailored to meet the unique needs of its clients. Our services aim to enhance efficiency, effectiveness, and overall operational excellence, propelling industries forward into a new era of efficiency and intelligence.",
    about2 :"Our Standard AMR technology is revolutionizing Autonomous Intralogistics Solutions and improving industry safety, innovation, and efficiency for clients across the globe.",
    service :["Intra logistics GT","Intra logistics GTX","Material Movement"],
    loc:"SF No:-348-1A3, Ground Floor,Sri Lakshmi Nagar II,Thanneer Pandhal Road,Peelamedu, Coimbatore,Tamil Nadu 641004"
  },
  {
    id: 14,
    title: "Nobuyrent",
    category: "Projector Screen Sound system",
    imageSrc:[image40,image41,image42],
    link: "https://nobuyrent.com",
    about : "NobuyRent is a cutting-edge online rental platform that is transforming the rental economy landscape. NobuyRent offers distinctive solution for:",
    about2 :"Owners to monetize less frequently used items, turning belongings into earnings.",
    service :["Projector Screen Sound system","Cinematographer for Hire ","Home appliances service"],
    loc:"19, Sivathangam Nagar,Vilankurichi Road,Coimbatore - 641035"
  },
  {
    id: 15,
    title: "Gehna",
    category: "Jewellery",
    imageSrc:[image43,image44,image45],
    link: "https://www.gehnaindia.com",
    about : "Experience the warmth of our in-store ambience and personal shopping consultants to make your shopping experience one that you will yearn for, repeatedly.",
    about2 :"If the welcoming aura of the store is not irresistible on its own, the hospitality and guidance of personal shopping consultants literally sweeps clients off. From patiently showcasing the stunning stock in store, to explaining gemstone and pricing details of each piece and acting as your liaison when you finally walk in for your personal meeting with Mr. Sunith, your personal shopping assistant will never leave you disappointed.",
    service :["Rings","Earings","Bangles"],
    loc:"5/33,13th Avenue, Harrington Road, ChetpetChennai 600031 (Mon - Sat 10:00 am - 7:00 pm)Tel: +91-98407 02969E-mail: customercare@gehnaindia.com"
  },
  {
    id: 16,
    title: "Mohan Jewellery",
    category: "Jewellery",
    imageSrc:[image46,image47,image48],
    link: "https://mohanjewellery.com/",
    about : "At Mohan Jewellery, every piece is a masterpiece, crafted with precision and passion by our team of expert craftsmen. We are your one-stop destination for a wide range of jewellery designs and pieces including earrings, bangles, necklaces and chains made of gold, diamond, gemstones and platinum. Additionally, you will get to explore our unique offerings such as couple jewellery, rare gemstones, and exquisite silver wares, all available to cater to your every desire. ",
    about2 :"Our jewellery sets are not just adorned with exquisite stones like Diamonds, Sapphires, Rubies, and Emeralds; it’s a reflection of our commitment to quality and perfection. Each jewellery set undergoes a rigorous grading process, ensuring only the finest stones grace our creations",
    service :["Rings","Earings","Bangles"],
    loc:"New 90 Old 83 Appar Swamy Koil Street P S Sivaswamy RoadMylapore Chennai 600004"
  },
];

const testimonials = [
  {
    name: "Shivani A.",
    title: "Product lead",
    rating: "4.2",
    quote:
      "Equispace transformed our outdated office into a space that's truly inclusive",
    ellipseClass: "ellipse-5",
    wrapperClass: "review1-copy-copy-copy",
  },
  {
    name: "Poonam Bansal",
    title: "NGO Director",
    rating: "5",
    quote: "Their accessible designs changed how our students move and learn",
    ellipseClass: "ellipse-8",
    wrapperClass: "review1",
  },
  {
    name: "Arushi Sharma",
    title: "Head of Design",
    rating: "4.5",
    quote: "Highly recommend anyone seeking interior design project",
    ellipseClass: "ellipse-4",
    wrapperClass: "review2",
    dataWid: "c5accebb-19af-013e-0384-e4b4272636e3",
    opacity: 0,
  },
  {
    name: "Kshitij K.",
    title: "Advocate",
    rating: "4.7",
    quote:
      "Equispace delivered accessibility without compromising on aesthetics",
    ellipseClass: "ellipse-1",
    wrapperClass: "review1-copy",
    dataWid: "c5accebb-19af-013e-0384-e4b4272636f5",
    opacity: 0,
  },
  {
    name: "Anjali S.",
    title: "Head of Marketing",
    rating: "4.9",
    quote:
      "For the first time, I felt completely independent moving through a public space",
    ellipseClass: "ellipse-3",
    wrapperClass: "review2-copy",
    dataWid: "51bcb942-39cd-c249-fda8-e3c8abef3742",
    opacity: 0,
  },
  {
    name: "Tanuj Ahuja",
    title: "Tech Lead",
    rating: "4.9",
    quote:
      "Equispace consistently delivers designs that meet and exceed national accessibility standards.",
    ellipseClass: "ellipse-7",
    wrapperClass: "review1-copy1",
  },
  {
    name: "Purav Jha",
    title: "Software developer",
    rating: "4.6",
    quote:
      "Their attention to detail and knowledge of RPWD compliance gave us complete confidence in the process.",
    ellipseClass: "ellipse-6",
    wrapperClass: "review2-copy-copy",
  },
  {
    name: "Tanuj Ahuja",
    title: "Tech Lead",
    rating: "4.9",
    quote:
      "Equispace consistently delivers designs that meet and exceed national accessibility standards.",
    ellipseClass: "ellipse-7",
    wrapperClass: "review1-copy1",
  },
  {
    name: "Purav Jha",
    title: "Software developer",
    rating: "4.6",
    quote:
      "Their attention to detail and knowledge of RPWD compliance gave us complete confidence in the process.",
    ellipseClass: "ellipse-6",
    wrapperClass: "review2-copy-copy",
  },
  {
    name: "Rishav Sha",
    title: "Head of Design",
    rating: "4.9",
    quote: "Equispace transformed our building into a truly inclusive space.",
    ellipseClass: "ellipse-2",
    wrapperClass: "review1-copy1-copy",
    dataWid: "31f3f657-2324-4456-a139-09da54977a29",
    opacity: 0,
  },
];


const PortfolioSection = () => {
  const cardRef = useRef(null);
  const cardFrontRef = useRef(null);
  const cardBackRef = useRef(null);
  const revealSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const card = cardRef.current;
    const cardFront = cardFrontRef.current;
    const cardBack = cardBackRef.current;
    const revealSection = revealSectionRef.current;

    if (!card || !cardFront || !cardBack || !revealSection) return;

    gsap.set(revealSection, {
      opacity: 1,
      scale: 1.1,
      clipPath: "circle(0% at center)",
    });
    gsap.set(card, { transformStyle: "preserve-3d" });

    const rotationValue = { y: 0 };
    let isScrolling = false;
    let scrollEndTimeout;
    let tiltIntensity = 1;

    const flipTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-wrapper",
        start: "top 30%",
        end: "bottom+=550%",
        scrub: 1,
        pin: true,
        anticipatePin: 0,
        onEnterBack: () => {
          gsap.to(rotationValue, { y: 0, duration: 1.4 });
          gsap.to(
            { tilt: 1 },
            { tilt: 1, duration: 1, onUpdate: () => (tiltIntensity = 1) }
          );
        },
        onUpdate: ({ progress }) => {
          isScrolling = true;
          clearTimeout(scrollEndTimeout);
          scrollEndTimeout = setTimeout(() => (isScrolling = false), 300);
          tiltIntensity = Math.max(1 - progress * 0.7, 0.3);
        },
      },
    });

    flipTimeline
      .to(rotationValue, {
        y: 180,
        ease: "power3.inOut",
        duration: 1.45,
        onUpdate: () => {
          gsap.set(card, { rotationY: rotationValue.y });
          if (rotationValue.y > 90) {
            cardFront.style.visibility = "hidden";
            cardBack.style.visibility = "visible";
            gsap.to(revealSection, {
              clipPath: "circle(100% at center)",
              duration: 2,
              ease: "power3.out",
            });
          } else {
            cardFront.style.visibility = "visible";
            cardBack.style.visibility = "hidden";
          }
        },
      })
      .to(card, { scale: 16, ease: "power3.inOut", duration: 2 }, "<")
      .to(
        revealSection,
        { opacity: 1, ease: "power2.out", duration: 1.5 },
        "-=0.5"
      );

    const handleMouseMove = (e) => {
      if (isScrolling) return;
      const offsetX =
        (e.clientX - window.innerWidth / 2) / (50 / tiltIntensity);
      const offsetY =
        (e.clientY - window.innerHeight / 2) / (50 / tiltIntensity);
      gsap.to(card, {
        rotationX: offsetY,
        rotationY: rotationValue.y - offsetX,
        ease: "power1.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      if (isScrolling) return;
      gsap.to(card, {
        rotationX: 0,
        rotationY: rotationValue.y,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      flipTimeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="card_section">
        {/* Card Flip */}
        <div className="card-wrapper">
          <div className="card" ref={cardRef}>
            <div className="card-front" ref={cardFrontRef}>
              <img
                src="https://cdn.prod.website-files.com/67f622de004cb2787adbbc2e/67f622de004cb2787adbbc3b_grommet-icons%3Aprojects.svg"
                width="Auto"
                height="64"
                alt="projects"
                className="grommet-iconsprojects"
              />
              <div className="frame-24">
                <div className="text-4">PORTFOLIO</div>
                <div className="text-5">⠏⠕⠗⠞⠋⠕⠇⠊⠕</div>
              </div>
            </div>
            <div className="card-back" ref={cardBackRef}></div>
          </div>
        </div>

        {/* BG stripes */}
        <div className="card-bg-2">
          {backgroundStrips.map(({ id, src }) => (
            <img
              key={id}
              src={src}
              alt={`background-${id}`}
              className="_1-4"
              loading="lazy"
            />
          ))}
        </div>

        {/* Testimonials */}
        {/* ——— Review Holder 0 ——— */}
       {/* Testimonials */}
{[0, 2, 4, 6].map((startIndex, holderIndex) => (
  <div key={holderIndex} className={`review-holder-${holderIndex}`}>
    {testimonials.slice(startIndex, startIndex + 2).map((review, index) => (
      <div
        key={review.name + index}
        className={review.wrapperClass}
        data-w-id={review.dataWid || undefined}
        style={review.opacity === 0 ? { opacity: 0 } : {}}
      >
        <div className={review.ellipseClass} />
        <div className="frame-1000004350">
          <div className="frame-1000004356">
            <div className="frame-1000004357">
              <div className="rishav-sha-3">{review.name}</div>
              <div className="text-24">|</div>
              <div className="rishav-sha-3">{review.title}</div>
            </div>
            <div className="frame-1000004358">
              <div className="_49-3">{review.rating}</div>
              <div className="frame-1000004359">
                <img
                  className="star-3"
                  src="https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c9a085bd7d0f970c3b9a3c_Star-1.svg"
                  alt=""
                  width={12}
                  height={12}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="text-26">"{review.quote}"</div>
        </div>
      </div>
    ))}
  </div>
))}

      </div>
      {/* Featured Work */}
      <div className="work-holder" ref={revealSectionRef}>
        <section className="s2">
          <div className="text-head">
            <h1 className="featured-work">Featured Work</h1>
            <section className="space2"></section>
            <div className="work_text">
              <div className="w" >
                <p className="paragraph_4">Step inside our spaces where</p>
              </div>
              <div className="w" >
                <p className="paragraph_4">
                  accessibility meets innovation—because
                </p>
              </div>
              <div className="w" >
                <p className="paragraph_4">great design belongs to everyone</p>
              </div>
            </div>
          </div>
        </section>

<section className="work">
  {Array.from({ length: Math.ceil(portfolioItems.length / 2) }).map((_, rowIndex) => (
    <div className={`portfolio-row row${rowIndex + 1} w-layout-grid`} key={rowIndex}>

      {portfolioItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/${item.title}`, { state: { data: item } })}
          style={{ cursor: "pointer" }}
          className="projects w-inline-block"
        >
          <div className="img-hold">
            <img
              src={item.imageSrc?.[0]}
              alt={item.title}
              className={`image-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            />
          </div>
          <div className="div-block-5">
            <div className="text-block-4">{item.category}</div>
            <div className="div-block-32">
              <div className="div-block-33">
                <img
                  className="img-2"
                  alt="arrow"
                  src="./arrow.png"
                />
                <h1 className="heading-2">{item.title}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ))}
</section>

      </div>
    </section>
  );
};

export default PortfolioSection;
