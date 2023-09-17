'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {ProjectSelector} from "@/components/ProjectSelector";
import {TimeEntry} from "@/types/timeEntry";
import {ReportDay} from "@/components/ReportDay";
import {getDates, sameDay} from "@/helpers/dateStuff";
import {uniqDates} from "@/helpers/arrayStuff";


type Props = {
    timeEntries: TimeEntry[]
}

export const Report = ({ timeEntries }: Props) => {
    useRouter();
    const [selectedProjectId, setSelectedProjectId] = useState<number>(4)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        setSelectedProjectId(parseInt(value))
    }

    timeEntries = timeEntries.filter((te:TimeEntry)=>te.project_id==selectedProjectId)

    let dateArray:Date[] = []
    timeEntries.forEach(function (te) {
        let datesForTE = getDates(new Date(te.start), new Date(te.end))
        datesForTE.forEach(function (date) {
            date.setHours(0,0,0,0)
            dateArray.push(date)
        })
    })

    dateArray = uniqDates(dateArray)
    dateArray.sort((date1, date2) => date2.getTime() - date1.getTime())

    function getEntriesFromDay(day:Date){
        let tes:TimeEntry[] = []
        timeEntries.forEach(function (te) {
            if(sameDay(day, new Date(te.start)) || sameDay(day, new Date(te.end)) || (day.getTime() > new Date(te.start).getTime() && day.getTime() < new Date(te.end).getTime())){
                tes.push(te)
            }
        })
        return tes
    }



    return (
            <>
                <ProjectSelector name={"project_id"} value={4} handleChange={handleSelectChange}/>
            <ul className="list-disc list-inside ml-8">
                {
                    dateArray.map((dt:Date)=>(
                        <ReportDay key={dt.toString()+"r"} timeEntries={getEntriesFromDay(dt)} day={dt} />
                    ))
                }
            </ul>
            </>
    )
}