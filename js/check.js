var loadingModal = new bootstrap.Modal(document.getElementById('loading'));
var successModal = new bootstrap.Modal(document.getElementById('success'));
var notfoundModal = new bootstrap.Modal(document.getElementById('notfound'));
var errorModal = new bootstrap.Modal(document.getElementById('error'));



document.getElementById("check-btn").addEventListener("click", function (event) {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        event.preventDefault();
        form.classList.add("was-validated");
    } else {
        event.preventDefault();
        check();
    }
});

function check() {
    loadingModal.show();
    setTimeout(function () {
        username = document.getElementById("username").value;

        requestUrl = "https://api.mtsmc.net/white-list/query?player=" + username;

        var myHeaders = new Headers();
        myHeaders.append("User-Agent", "mtsmc.net/1.0.0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(requestUrl, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == "200") {
                    loadingModal.hide();
                    successModal.show();
                } else if (result.status == "404") {
                    loadingModal.hide();
                    notfoundModal.show();
                } else {
                    loadingModal.hide();
                    errorModal.show();
                }
            })
            .catch(error => {
                console.log('error', error);
                loadingModal.hide();
                errorModal.show();
            });
    }, 1000);
}