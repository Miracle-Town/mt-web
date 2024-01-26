//初始化所有弹窗实体
var loadingModal = new bootstrap.Modal(document.getElementById('loading'));
var successModal = new bootstrap.Modal(document.getElementById('success'));
var notfoundModal = new bootstrap.Modal(document.getElementById('notfound'));
var errorModal = new bootstrap.Modal(document.getElementById('error'));

//验证用户表单输入
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

//请求后端白名单查询api
function check() {
    loadingModal.show();
    setTimeout(function () {
        username = document.getElementById("username").value;

        requestUrl = "https://api.mtsmc.net/white-list/query?player=" + username;

        fetch(requestUrl)
            .then(response => response.json())
            .then(result => {
                if (result.status == "200") {
                    document.getElementById("permission").innerHTML = result.permission;
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