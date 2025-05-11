import {
  BsAwardFill,
  BsBug,
  BsCloud,
  BsCloudFog,
  BsCodeSlash,
  BsFileCode,
  BsGlobe,
  BsJournalAlbum,
} from "react-icons/bs"
import { FaCoffee, FaDocker, FaLink, FaReact, FaRobot, FaServer, FaSyncAlt } from "react-icons/fa"
import Fact from "./Fact"

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-4">
      <Fact Icon={FaRobot} desc="Automation is my jam" border />
      <Fact Icon={FaLink} desc="CI/CD is my daily rhythm" border />
      <Fact Icon={FaServer} desc="Servers never sleep" border />
      <Fact Icon={BsBug} desc="I squash bugs daily" />
      <Fact Icon={FaCoffee} desc="Code, commit, coffee" />
      <Fact Icon={FaDocker} desc="Docker is my playground" />
      <Fact Icon={BsCodeSlash} desc="10,000+ Lines Written" />
      <Fact Icon={BsCloudFog} desc="Living in the cloud" />
    </ul>
  )
}
