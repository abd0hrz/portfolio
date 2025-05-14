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

export default function Key() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  )

  if (error) console.log(error)

  return (
    <div className="w-full flex justify-center items-center">
      <ul className="w-full flex justify-center">
        <li className="w-full max-w-5xl px-4 py-6 flex justify-center">
          <BackEnd backend={data?.skills[0].backEnd} />
        </li>
      </ul>
    </div>
  )
}
