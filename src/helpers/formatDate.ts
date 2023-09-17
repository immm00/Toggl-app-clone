export const formatDate = (date: Date) => {
  return date.toISOString().slice(0,19)
}

export const niceDate = (date: Date) => {
  let hours = ""
  let minutes = ""
  if(date.getHours()<10){
    hours = "0"+date.getHours()
  } else {
    hours = date.getHours().toString()
  }
  if(date.getMinutes()<10){
    minutes = "0"+date.getMinutes()
  } else {
    minutes = date.getMinutes().toString()
  }


  return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+hours +":"+minutes

}

export const niceDateWithoutTime = (date: Date) => {
  return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()
}
