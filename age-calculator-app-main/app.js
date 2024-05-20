document.addEventListener('DOMContentLoaded', (event) => {
    let click = document.getElementById('run');

    click.addEventListener('click', run);

    function run() {
        let day = (document.getElementById('day').value);
        let month = (document.getElementById('month').value);
        let year = (document.getElementById('year').value);
        let spanyear = document.getElementById('years')
        let spanmonth = document.getElementById('months')
        let spanday = document.getElementById('days')

        // Validation
        if (!day || !month || !year) {
            document.createElement('p');
            
            return;
        }
        if (day < 1 || day > 31) {
            alert("Day must be between 1 and 31");
            return;
        }
        if (month < 1 || month > 12) {
            alert("Month must be between 1 and 12");
            return;
        }
        let currentDate = new Date();
        if (year > currentDate.getFullYear()) {
            alert("Year cannot be in the future");
            return;
        }
        let inputDate = new Date(year, month - 1, day);
        if (inputDate.getDate() != day || inputDate.getMonth() + 1 != month) {
            alert("Invalid date");
            return;
        }

        // Calculate age
        let age = compute(inputDate, currentDate);

        console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days`);

        // Update the output spans
        if (spanyear) spanyear.innerHTML = age.years;
        if (spanmonth) spanmonth.innerHTML = age.months;
        if (spanday) spanday.innerHTML = age.days;

        // Clear input fields after updating the output
        clearInputFields();
    }

    function compute(inputDate, currentDate) {
        let years = currentDate.getFullYear() - inputDate.getFullYear();
        let months = currentDate.getMonth() - inputDate.getMonth();
        let days = currentDate.getDate() - inputDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    function clearInputFields() {
        document.getElementById('day').value = "";
        document.getElementById('month').value = "";
        document.getElementById('year').value = "";
    }
});


// Add an event listener to the SVG
