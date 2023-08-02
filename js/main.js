let navbar = document.getElementById('nav');

addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    getVersion();
});

function getVersion() {
    fetch('https://cdn.rxgzs.cn/api/get-mt-web-version.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        })
        .then(version => {
            document.getElementById("version").innerHTML = version;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("version").innerHTML = "Error occurred while fetching version.";
        });
}


