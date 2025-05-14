import { FieldValueData } from "../../types"
import FrontEndSkeleton from "./FrontEndSkeleton"

interface Props {
  frontend: FieldValueData[] | undefined
}

export default function Development({ frontend }: Props) {
  return (
    <div className="pt-11">
      {frontend ? (
        frontend.map((f) => (
          <div key={f.id} className="mb-1">
            <h3 className="capitalize text-2xl text-gray-300">{f.field}</h3>
            <progress
              className="progress progress-warning w-full bg-gray-800 mb-1"
              value={f.value}
              max="100"
            ></progress>
          </div>
        ))
      ) : (
        <>
          <FrontEndSkeleton />
          <FrontEndSkeleton />
          <FrontEndSkeleton />
          <FrontEndSkeleton />
        </>
      )}
    </div>
  )
}
