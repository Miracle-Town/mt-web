window.onload = () => {
    document.getElementById('index-banner').style.marginTop = navbar.offsetHeight + 'px';
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function copyToClipboard() {
    // 获取要复制的文本内容
    var copyText = "play.mtsmc.net";

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