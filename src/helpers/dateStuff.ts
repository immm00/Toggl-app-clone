export const getDuration = (start:Date, end:Date)   => {
    return Math.floor(end.getTime()-start.getTime())/60000
}

export const getDates = (startDate:Date, endDate:Date) => {
    const dates = []
    let currentDate = startDate
    while (currentDate <= endDate) {

        dates.push(currentDate)
        let tmp= new Date(currentDate.valueOf())
        tmp.setDate(tmp.getDate()+1)
        currentDate = tmp
    }
    return dates
}

export const sameDay = (startDate:Date, endDate:Date) => {
    return startDate.getDate() === endDate.getDate() && startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear();
}
