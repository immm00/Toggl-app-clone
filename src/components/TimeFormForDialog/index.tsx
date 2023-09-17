import {TimeEntry} from "@/types/timeEntry";
import React, {useState} from "react";
import {Input} from "@/components/Input";

type Props = {
    initialValues: TimeEntry
    onSave: (timeEntry: TimeEntry) => void
    onCancel: () => void
}
export const TimeFormForDialog = ({initialValues, onSave}:Props) => {
    const[timeEntry, setTimeEntry]=useState(initialValues)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setTimeEntry({...timeEntry, [name]:value})
    }
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(timeEntry)
    }
    return (
        <>
        <p>{JSON.stringify(timeEntry)}</p>
        <form onSubmit={handleSave}>
            <Input label={"Task"} name="task" value={timeEntry.task} onChange={handleChange} />
            <Input label={"Start"} name="start" value={timeEntry.start.slice(0,19)} onChange={handleChange} type={"datetime-local"} />
            <Input label={"End"} name="end" value={timeEntry.end.slice(0,19)} onChange={handleChange} type={"datetime-local"}/>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </form>
        </>
    )
}