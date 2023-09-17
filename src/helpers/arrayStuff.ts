export const uniq = (array: any[]) => {
    return array.reduce((acc: any[], cur: any) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, [])
}

export const uniqDates = (array:Date[]) => {
    return array
        .map(function (date) { return date.getTime() })
        .filter(function (date, i, array) {
            return array.indexOf(date) === i;
        })
        .map(function (time) { return new Date(time); });
}
