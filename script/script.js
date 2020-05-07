function newFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('newInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("search");
    li = ul.getElementsByTagName('section');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Show the date of today
const d = new Date();
const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
const time = new Date()
const curHr = time.getHours()
const greetHere = document.querySelector('h1')

if (curHr < 12) {
    document.getElementById("date").innerHTML = "Goedemorgen Larissa! Het is" + " " + d.getDate() + " " + months[d.getMonth()];
} else if (curHr < 18) {
    document.getElementById("date").innerHTML = "Goeie middag Larissa! Het is" + " " + d.getDate() + " " + months[d.getMonth()];
} else {
    document.getElementById("date").innerHTML = "Goede avond Larissa! Het is" + " " + d.getDate() + " " + months[d.getMonth()];
}