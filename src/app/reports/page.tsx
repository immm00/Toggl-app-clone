import {Report} from "@/components/Report";
import {getAllTEs} from "@/serverCalls/timeEntries";
import {ProjectSelector} from "@/components/ProjectSelector";
import {TimeEntry} from "@/types/timeEntry";


async function getData() {
    const res = await getAllTEs()
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}


export default async function Page() {
    const data=await getData()
  return(
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-3">Reports</h1>
        <Report timeEntries={data}/>
    </>
  )


}