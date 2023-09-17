import {TimeEntry} from "@/types/timeEntry";
import {niceDate} from "@/helpers/formatDate";


type Props = {
    timeEntries: TimeEntry[]
    onSelect: (id: number) => () => void
    onDelete: (id: number) => () => void
}
export const TimeEntryList = ({timeEntries, onSelect, onDelete}:Props) => {
    return(
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    timeEntries.map((timeEntry)=> (
                            <tr key={timeEntry.id}>
                                <th>{timeEntry.id}</th>
                                <td>{timeEntry.task}</td>
                                <td>{timeEntry.project_name}</td>
                                <td>{niceDate(new Date(timeEntry.start.slice(0,19)))}</td>
                                <td>{niceDate(new Date(timeEntry.end.slice(0,19)))}</td>
                                <th>
                                    <button onClick={onSelect(timeEntry.id!)} className="btn btn-neutral btn-sm mr-4">Edit</button>
                                    <button onClick={onDelete(timeEntry.id!)} className="btn btn-secondary btn-sm mr-4">Delete</button>
                                </th>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}