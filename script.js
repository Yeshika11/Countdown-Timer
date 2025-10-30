const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime; // in milliseconds

  // If countdown is over
  if (timeDifference <= 0) {
    days.textContent = '00';
    hours.textContent = '00';
    mins.textContent = '00';
    secs.textContent = '00';
    return;
  }

  const calDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const calHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const calMins = Math.floor((timeDifference / (1000 * 60)) % 60);
  const calSecs = Math.floor((timeDifference / 1000) % 60);

  // Helper to pad numbers
  const pad = (num) => num.toString().padStart(2, '0');

  days.textContent = pad(calDays);
  hours.textContent = pad(calHours);
  mins.textContent = pad(calMins);
  secs.textContent = pad(calSecs);
};

const countDown = (targetDate) => {
  // Run immediately to avoid 1-second delay
  updateCountDown(targetDate);
  // Then update every second
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date('December 1, 2025 07:00:00');
countDown(targetDate);