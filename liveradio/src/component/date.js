export function date_frame (date){
    var month  = new Array()
    month[0] = "January";
    month[1] = "Febuary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";



    var d = new Date(date)
    const year = d.getFullYear();
    const newdate = d.getDate();
    const n = month[d.getMonth()];
    
    return `${n} ${newdate} ${year}`

}

