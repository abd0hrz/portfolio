import { AiOutlineSwapRight } from "react-icons/ai"
import Title from "../Title"
import CertificateSection from "./CertificateSection"

const loading = false

export default function GuestBook() {
  return (
    <section
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
      id="guestComments"
    >
      <Title name="Certifications" />
      <section className="px-6 py-8">
        <CertificateSection />
      </section>
    </section>
  
  )
}
