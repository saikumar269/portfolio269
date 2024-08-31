function redirectToLink1() {
    var url = "https://foodmunch269.ccbp.tech/";
    window.open(url, "_blank");
}

function redirectToLink2() {
    var url = "https://todoapp269.ccbp.tech/";
    window.open(url, "_blank");
}



function redirectToLink4() {
    var url = "https://weatherapp269.ccbp.tech/";
    window.open(url, "_blank");
}



// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === document.getElementById("aboutUsModal")) {
        document.getElementById("aboutUsModal").style.display = "none";
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}