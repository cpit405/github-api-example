document.getElementById("xhr-btn").addEventListener("click", doXHR);

// This will fetch the API using XMLHTTPRequest (XHR)
function doXHR() {
    let username = document.getElementById("gh-username").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // When the request is done, successful, and response is ready
        if (this.readyState == 4 && this.status == 200) {
            let respObj = JSON.parse(xhttp.responseText);
            document.getElementById("username").innerText = respObj.name;
            document.getElementById("pic").src = respObj.avatar_url;
        }
    };
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhttp.open("GET", "https://api.github.com/users/" + username);
    xhttp.send();
}