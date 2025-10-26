const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs= document.getElementById('secs');


const updateCountDown =(deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; // miliseconds

    //calculate days, hours, mins, secs from timeDifference
    let calSecs= Math.floor(imeDifference / 1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHours =Math.floor(timeDifference/1000/60/60) % 24;
    let calDays =Math.floor(timeDifference/1000/60/60/24);


    //days.textContent = calDays;
    secs.textContent = calSecs;
    //console.log(days);
}

const countDown =(targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);


}


const targetDate = new Date("June 01 2023 07:00");
countDown(targetDate);
