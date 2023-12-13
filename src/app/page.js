

import CLientReview from "@/Components/ClientReview/CLientReview";
import ContactForHomePage from "@/Components/ContactForHomePage/ContactForHomePage";
import HomeHero from "@/Components/HomeHero/HomeHero";
import PortFolio from "@/Components/PortFolio/PortFolio";
import ServiceList from "@/Components/ServiceList/ServiceList";
import ServiceSection from "@/Components/ServiceSection/ServiceSection";
import SocialContactIcon from "@/Components/SocialContactIcon/SocialContactIcon";
import Team from "@/Components/Team/Team";


const HomePage =() => {

  return (
    <main className="">
        
        <HomeHero/>
        <ServiceSection/>
        <ServiceList/>             
        <PortFolio/>
        <ContactForHomePage/>
        <CLientReview/>        
        <SocialContactIcon/>
        <Team/>

    </main>
  )
  
}

export default HomePage; 
