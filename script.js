    // function myFunction() {
    //     // Declare variables
    //     var input, filter, ul, li, a, i, txtValue;
    //     input = document.getElementById('myInput');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("myUL");
    //     li = ul.getElementsByTagName('li');

    //     // Loop through all list items, and hide those who don't match the search query
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // }

    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const time = new Date()
    const curHr = time.getHours()
    const greetHere = document.querySelector('h1')

    if (curHr < 12) {
        document.getElementById("date").innerHTML = "Goedemorgen 😃, het is" + " " + d.getDate() + " " + months[d.getMonth()];
    } else if (curHr < 18) {
        document.getElementById("date").innerHTML = "Goeie middag 🙋, het is" + " " + d.getDate() + " " + months[d.getMonth()];
    } else {
        document.getElementById("date").innerHTML = "Goede avond 😪, het is" + " " + d.getDate() + " " + months[d.getMonth()];
    }



    window.addEventListener("beforeunload", function (e) {
        // var confirmationMessage = "\o/";

        // (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        // console.log(confirmationMessage)


        var audio = new Audio('bye.mp3');
        audio.play()

        return "halo";
    });