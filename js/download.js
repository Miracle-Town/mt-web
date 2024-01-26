//初始化所有弹窗实体
var loadingModal = new bootstrap.Modal(document.getElementById('loading'));
var successModal = new bootstrap.Modal(document.getElementById('success'));
var invalidModal = new bootstrap.Modal(document.getElementById('invalid'));
var errorModal = new bootstrap.Modal(document.getElementById('error'));

//验证用户表单输入
document.getElementById("post-btn").addEventListener("click", function (event) {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        event.preventDefault();
        form.classList.add("was-validated");
    } else {
        event.preventDefault();
        downloadRequest();
    }
});

//请求后端API
function downloadRequest() {
    loadingModal.show();
    setTimeout(function () {
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;

        requestUrl = "https://api.mtsmc.net/download/send?name=" + username + "&email=" + email;

        fetch(requestUrl)
            .then(response => response.json())
            .then(result => {
                if (result.code == "200") {
                    loadingModal.hide();
                    successModal.show();
                } else if (result.code == "403") {
                    loadingModal.hide();
                    invalidModal.show();
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