import { generateLocalUrl, generateUrl } from '@/helpers/generate_url'
import { TimeEntry } from '@/types/timeEntry'

export const createTimeEntry = async (timeEntry: TimeEntry) => {
  return await fetch(generateLocalUrl('/time-entries'), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  })
}

export const deleteTimeEntry = async (timeEntry: TimeEntry) => {
  let te = {
    id:timeEntry.id,
    user_name:process.env.NEXT_PUBLIC_USERNAME
  }
  return await fetch(generateUrl('/time-entries'),{
    method:'DELETE',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(te)
  })
}

export const updateTimeEntry = async (timeEntry: TimeEntry) => {
  timeEntry.user_name=process.env.NEXT_PUBLIC_USERNAME
  return await fetch(generateUrl('/time-entries'),{
    method:'PUT',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(timeEntry)
  })
}