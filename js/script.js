/*Email Error Message*/

function confirm_alert(node) {
    return confirm("Our Email Forwarders are not responding at the moment. Your msg could not be forwarded. Kindly mail your msg at: mrkumli@outlook.com, Inconvenience regretted!");
}

/*Nav Bar*/

var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


/*Login Page*/
