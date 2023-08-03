const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//微信端适配
document.addEventListener("WeixinJSBridgeReady", function () {
    document.getElementById('banner-video').play();
}, false);


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