document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            // Extract the quote and author from the API response
            const { content, author } = data;

            // Display the quote on the page
            document.getElementById('quote').textContent = `"${content}" - ${author}`;
        })
        .catch(error => {
            console.error('Error fetching random quote:', error);
        });
});






setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        
        " <span style='font-size:0.1em;'>" + am_pm + "</span>";
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

function showDate(){
    let date = new Date();
    let dd = date.getUTCDate();
    let mm = date.getUTCMonth() + 1;
    let yyyy = date.getFullYear();

    let currentDate = yyyy + '/' + mm + '/' + dd;

    document.getElementById("date").innerHTML = currentDate;
}


showTime();
showDate();