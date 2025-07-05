import OurClient from "../Component/OurClient/OurClient"
import OurDesign from "../Component/OurDesign/OurDesign"
import AboutEquispace from "../Component/PortfolioAbout/AboutEquispace"
import PortfolioFaq from "../Component/PortfolioFaq/PortfolioFaq"
import PortfolioFooter from "../Component/PortfolioFooter/PortfolioFooter"
import PortfolioSection from "../Component/PortfolioSection/PortfolioSection"
import TextSection from "../Component/PortfolioSection/TextSection"


export const Portfolio = () => {
  return (
   <>
   <div id="top"></div>
   <TextSection/>
   <PortfolioSection/>
   <AboutEquispace/>
   <OurDesign/>
   <OurClient/>
   <PortfolioFaq/>
   <PortfolioFooter/>
   </>
  )
}
