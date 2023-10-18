document.getElementById("xhr-btn").addEventListener("click", doXHR);
document.getElementById("fetch-btn").addEventListener("click", doFetch);
document.getElementById("fetch-async-btn").addEventListener("click", doFetchAsyncAwait);

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

// This will fetch the API using Fetch API with promises
function doFetch() {
    let username = document.getElementById("gh-username").value;
    let url = "https://api.github.com/users/" + username;
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (responseText) {
            let data = JSON.parse(responseText);
            document.getElementById("username").innerText = data.name;
            document.getElementById("pic").src = data.avatar_url;
        })
        .catch(function (e) {
            console.log("Error: " + e);
        })

}

// This will fetch the API using Fetch API with async/await
async function doFetchAsyncAwait() {
    let username = document.getElementById("gh-username").value;
    let url = "https://api.github.com/users/" + username;
    let response = await fetch(url); // this is an async call
    let data = await response.json(); // this is an async call
    document.getElementById("username").innerText = data.name;
    document.getElementById("pic").src = data.avatar_url;
}