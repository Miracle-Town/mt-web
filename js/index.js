//全局按钮悬停提示
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//微信端适配
document.addEventListener("WeixinJSBridgeReady", function () {
    document.getElementById('banner-video').play();
}, false);

//复制IP
function copyToClipboard() {
    // 获取要复制的文本内容
    let copy = document.getElementById("ServerIP");
    var copyText = copy.innerText;

    // 创建一个隐藏的 textarea 元素
    var textarea = document.createElement("textarea");
    textarea.value = copyText;
    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.opacity = 0;

    // 添加 textarea 到文档中
    document.body.appendChild(textarea);

    // 选择并复制文本内容
    textarea.select();
    document.execCommand("copy");

    // 删除临时 textarea 元素
    document.body.removeChild(textarea);
}

//初始化提示框
const errorToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('errorToast'))
const birthdayToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('birthdayToast'))
const endToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('endToast'))

//展示endToast
function displayEndToast() {
    endToast.show();
}

//初始化窗口
window.onload = () => {
    getPing();
    displayEndToast();
}

//移除Get-Ping占位符
function displayPingInfo() {
    let pingInfo = document.getElementsByClassName("ping-info");
    for (let i = 0; i < pingInfo.length; i++) {
        pingInfo[i].classList.remove("placeholder");
    }
}

//Get-Ping API
function getPing() {
    let status = document.getElementById("status");
    let people = document.getElementById("people");
    let gameVersion = document.getElementById("game-version");

    fetch('https://api.mtsmc.net/ping/get-info')
        .then(response => response.json()) // 将响应解析为 JSON
        .then(data => {
            if (data.errorcode == 404) {
                errorToast.show()
                status.innerText = "当前离线";
                people.innerText = "null";
                gameVersion.innerText = "null";
                displayPingInfo();
            }
            else {
                status.innerText = "当前在线";
                people.innerText = data.players.online + " / " + data.players.max;
                //gameVersion.innerText = data.version.name;
                gameVersion.innerText = "1.18.2";
                displayPingInfo();
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
            errorToast.show()
            status.innerText = "unknown";
            people.innerText = "null";
            gameVersion.innerText = "null";
            displayPingInfo();
        });
}
