const date=new Date();

function generateCalendar(){
    const firstDay=date.getDay();// this will return the index value of the day --0 = Sun-- 1= Mon 
    const lastDayofTheMonth=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();//this will give u the index of the last day of the month like if its sunday it will be 0 and 1 for monday and so on
    const month=date.getMonth();
    date.setDate(1);// helps in creating from where the month start
    console.log(date.getDay());
    const nextDays = 7-lastDayofTheMonth-1;
    

const months=["January","February","March","April","May","June","July","August","September",
"October","November","December"];
const lastDay=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();// this gives you the last day of the current month
const prevLastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();// this will give you the last day of the previous month
console.log(prevLastDay);
const cMonth=document.querySelector(".c-month");
console.log(cMonth);
cMonth.innerHTML=months[month];
const cDate=document.querySelector(".cDate");
cDate.innerHTML=date.toDateString();
cDay=document.querySelector(".days");
console.log(cDate);
let days=" ";
for(let x=firstDay; x>0; x--){
    days+=`<div class="prev-date">${prevLastDay-x+1}</div>`; 
}/*
for(let j=1; j<=nextDays; j++){
    days+=`<div class="next-date">${j}</div>`; 
    console.log(j);
}*/

for(let i=1; i<=lastDay; i++){
    if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()){
    days+=`<div class="today">${i}</div>`;  
    }else{ 
        days+=`<div>${i}</div>`;
    }
    
    cDay.innerHTML=days;

}

}

document.querySelector(".previous").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1)

    generateCalendar();

})
document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1)
    generateCalendar();
})
generateCalendar();
