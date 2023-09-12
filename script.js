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
  const lastDay = new Date(year, month +1, 0);

  dates.innerHTML = '';
  monthYear.textContent = new Date(year, month).toLocaleString('default', 
    {
      month: 'long'
    }
  ) + ' ' + year;
}

generateCalendar(currentMonth,currentYear);

nextBtn.addEventListener('click', () => {
  currentMonth++;
}

prevBtn.addEventListener('click', () => {
  currentMonth--;
}
