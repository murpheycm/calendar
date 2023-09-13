const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to create the calendar
function generateCalendar(month, year) {
  const monthYear = document.getElementById('monthYear');
  const dates = document.getElementById('dates');
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const start = firstDay.getDay();
  const end = lastDay.getDate();


  monthYear.textContent = new Date(year, month).toLocaleString('default', {month: 'long'}) + ' ' + year;
  dates.innerHTML = '';
  
  // Loop to generate start date of month
  for (let i = 0; i < start; i++) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    datesElement.appendChild(dateElement);
  }

  for (let day = 1; day <= end; day++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = day;
    dateElement.classList.add('date');
    
    if (month === currentDate.getMonth() && year === currentDate.getFullYear() && day === currentDate.getDate()) {
      dateElement.classList.add('current-month');
    };
  };
};

generateCalendar(currentMonth,currentYear);

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});
