import {TimeEntry} from "@/types/timeEntry";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {niceDate, niceDateWithoutTime} from "@/helpers/formatDate";
import {getDates, getDuration, sameDay} from "@/helpers/dateStuff"
import {uniq} from "@/helpers/arrayStuff"
import {start} from "repl";

type Props = {
    timeEntries: TimeEntry[]
    day :Date
}


export const ReportDay = ({ timeEntries, day }: Props) => {


    let sumOfTimes = 0
    timeEntries.forEach(function (te) {
        let time=0
        let startDate = new Date(te.start)
        let endDate = new Date(te.end)
        startDate.setHours(startDate.getHours()-2)
        endDate.setHours(endDate.getHours()-2)


        if(sameDay(startDate, endDate)){
            time = getDuration(startDate, endDate)
        } else if (sameDay(startDate, day)){
            day.setHours(23,59,59)
            time = getDuration(startDate, day)
        } else if (sameDay(endDate, day)){
            time = getDuration(day, endDate)
        } else {
            time = 24 * 60
        }

        te.duration = time
        sumOfTimes +=  time
    })

    let hours = Math.floor(sumOfTimes / 60)
    let minutes = Math.floor(sumOfTimes % 60)

    return (
        <li key={day.toString()}>
            {niceDateWithoutTime(day)} - {hours} hours, {minutes} minutes spent
            <ul key={day.toString()} className="list-disc list-inside ml-16">
                {timeEntries.map((te)=>(
                    <li key={te.id}>{te.task} ({Math.floor(te.duration!/60)}h, {Math.floor(te.duration!%60)}m)</li>
                ))}
            </ul>
        </li>
    )
}