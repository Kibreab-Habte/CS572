
//question - 2
function isWeekend(){
    const todayDate = new Date();
    console.log('today date: ' +todayDate)
    const day = todayDate.getDay();
    
    console.log('day : '+day)

    const weekdays = ['weekday', 'weekday','weekday','weekday','weekday'];
    const days = ['weekends',...weekdays,'weekends']
    return days[day]
}
console.log(isWeekend());