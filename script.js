const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs= document.getElementById('secs');


const updateCountDown =(deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; // miliseconds

    //calculate days, hours, mins, secs from timeDifference
    let calSecs= Math.floor(imeDifference / 1000)% 60;
    console.log(calSecs);
}

const countDown =(targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);


}


const targetDate = new Date("June 01 2023 07:00");
countDown(targetDate);
