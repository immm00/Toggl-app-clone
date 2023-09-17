'use client'

import {useState} from 'react'
import {TimeEntry} from '@/types/timeEntry'
import {TimeEntryList} from '@/components/TimeEntryList'
import {useRouter} from 'next/navigation'
import {Dialog} from '@/components/Dialog'
import {TimeForm} from '@/components/TimeForm'
import {TimeFormForDialog} from "@/components/TimeFormForDialog";
import {deleteTimeEntry, updateTimeEntry} from "@/clientCalls/timeEntries";


type Props = {
    timeEntries: TimeEntry[]
}

export const TimeEntries = ({timeEntries}: Props) => {
    const [editingTimeEntry, setEditingTimeEntry] = useState<TimeEntry | undefined>(undefined)
    const router = useRouter()

    const selectTimeEntry = (id: number) => () => {
        setEditingTimeEntry(timeEntries.find((p) => p.id === id))
    }

    const delTimeEntry =  (id:number) => async () => {
        const res = await deleteTimeEntry(timeEntries.find((p) => p.id === id)!)
        if(res.ok){
            router.refresh()
        }
    }

    const saveTimeEntry = async (timeEntry: TimeEntry) => {
            const res = await updateTimeEntry(timeEntry)
            if (res.ok) {
                router.refresh()
                setEditingTimeEntry(undefined)
            }
    }
    return (
        <>
            <Dialog open={editingTimeEntry !== undefined} close={() => setEditingTimeEntry(undefined)}>
                {editingTimeEntry !== undefined &&
                    <TimeFormForDialog initialValues={editingTimeEntry} onSave={saveTimeEntry}
                                   onCancel={() => setEditingTimeEntry(undefined)}/>}
            </Dialog>
            <TimeForm />
            <TimeEntryList timeEntries={timeEntries} onSelect={selectTimeEntry} onDelete={delTimeEntry}/>
        </>
    )
}