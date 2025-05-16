import AboutMe from "./AboutMe"
import BrandLogos from "./BrandLogos"
import Facts from "./Facts"
import MyServices from "./MyServices"
import Prices from "./Prices"
import Testimonials from "./Testimonials"
import Title from "../Title"
import dynamic from "next/dynamic";
import TechnicalSkills from "../TechnicalSkills";
import Skills from "../resumePage/Skills"
import Key from "../resumePage/Key"


const Charts = dynamic(() => import("../Charts"), { ssr: false });

export default function About() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <AboutMe />

      <Title name="my services" />
      <MyServices />

      <Title name="Soft Skills" />
      <Skills />
      

      <Title name="Technical Skills" />
      <TechnicalSkills />

      <Title name="skills overview" />
      <Charts />

      <Title name="Key Achievements" />
      <Key />
      
      {/* 
      <Title name="pricing" />
      <Prices />
    
      <Title name="clients" />
      <BrandLogos />
      */}
      <Title name="testimonials" />
      <Testimonials />

      <Title name="fun facts" />
      <Facts />
    
    </section>
  )
}
