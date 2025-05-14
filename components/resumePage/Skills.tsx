import { useQuery } from "@apollo/client"
import { FaLanguage, FaReact, FaUserFriends } from "react-icons/fa"
import { SkillData } from "../../types"
import BackEnd from "./BackEnd"
import FrontEnd from "./FrontEnd"
import IconTitle from "./IconTitle"
import Knowledge from "./Knowledge"
import Languages from "./Languages"
import resumeOperations from "../../graphqlOperations/resume"
import { SiSkillshare } from "react-icons/si"

interface SkillQuery {
  skills: SkillData[]
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  )

  if (error) console.log(error)

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 py-6">
          <IconTitle title=" Personal Competencies" Icon={FaUserFriends} />
          <Knowledge knowledge={data?.skills[0].knowledge} />
        </li>
        <li className="relative px-12 pt-6 vCustomLine before:left-0 sm:before:block before:hidden">
          <IconTitle title="languages" Icon={FaLanguage} />
          <Languages languages={data?.skills[0].languages} />
        </li>
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {/*<li className="px-12 py-6">
          <IconTitle title="back-end" Icon={FaReact} />
          <BackEnd backend={data?.skills[0].backEnd} />
        </li>
        <li className="relative px-12 pt-6 vCustomLine before:left-0 sm:before:block before:hidden">
          <IconTitle title="front-end" Icon={FaReact} />
          <FrontEnd frontend={data?.skills[0].frontEnd} />
        </li>*/}

      </ul>
    </>
  )
}
