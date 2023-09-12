const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Function to create the calendar
function generateCalendar(month, year) {
  


}

generateCalendar(currentMonth,currentYear);

nextBtn.addEventListener('click', () => {
  currentMonth++;
}

prevBtn.addEventListener('click', () => {
  currentMonth--;
}
