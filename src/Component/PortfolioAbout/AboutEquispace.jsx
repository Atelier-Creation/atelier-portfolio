import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutImg from "../../assets/portfolioGridImage/about.png";
import "../PortfolioSection/PortfolioSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEquispace() {
  const imgRef = useRef(null);
  const logoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
     const isMobile = window.innerWidth <= 768;
  if (isMobile) return;
    const ctx = gsap.context(() => {
      // Pin the section and animate image scale
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      });

      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
          },
        }
      );

      gsap.to(logoRef.current, {
        y: "12vh",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="div-block-11" ref={sectionRef}>
      <div className="about-but-head">
        <div className="heading-about-us">
          <div className="text-block-8">About Atelier Creations</div>
          <div className="ab">
            <div className="text-2-copy">
              CRAFTING DIGITAL EXCELLENCE, ONE BRAND AT A TIME
              <br />
            </div>
          </div>
        </div>

        <div className="holder">
          <p className="about-us-text">
            At Atelier Creations, we don't just build websites or design visuals — we bring brands to life. Our
            passion lies in creating impactful digital experiences that blend creativity with strategy. From
            innovative UI/UX and web development to performance-driven marketing, we empower
            businesses to grow, connect, and lead in the digital space.
          </p>
        </div>

        <div className="but-copy">
          <a href="#foot" className="button_new-copy w-inline-block">
            <div className="div-block-9"></div>
            <div className="text-block-2">Let&apos;s Connect</div>
          </a>
        </div>
      </div>

      <div className="logo-hold" ref={logoRef}>
        <img
          src="./logo1.svg"
          alt=""
          className="image-12"
        />
      </div>

      <div className="about_image_div" ref={imgRef}>
        <img
          src={aboutImg}
          alt=""
          className="ibm-click"
        />
      </div>
    </div>
  );
}
