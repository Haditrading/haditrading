
// whatsapp button
document.querySelector(".whatsapp-button").addEventListener("click", function() {
    alert("You will be redirected to WhatsApp.");
});


// main page buttons
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".button1").onclick = function () {
        window.location.href = "https://youtube.com/playlist?list=PLi6_9pbiGKp_lsVrNMigbVM1sIW73_zkZ&si=xxOTyq3tS3CSNQbD";
    };
    document.querySelector(".button2").onclick = function () {
        window.location.href = "https://www.youtube.com/watch?v=BSAUspg_pEs";
    };
    document.querySelector(".button3").onclick = function () {
        window.location.href = "https://www.youtube.com/watch?v=2DrFxAbQz-A";
    };
    document.querySelector(".btn1").onclick = function () {
        window.location.href = "assets/forex_trading_tutorial.pdf ";
    };
    document.querySelector(".btn2").onclick = function () {
        window.location.href = "https://t.me/+8poprzDCOVUzZjFk";
    };
    


    // social media butns
    document.querySelector(".tiktok").onclick = function () {
        window.location.href = "https://vm.tiktok.com/ZSMdfdv74/";
    };

    document.querySelector(".instagram").onclick = function () {
        window.location.href = "https://www.instagram.com/hadibhai07?igsh=bzA0Z21qZXlxOG5u";
    };

    document.querySelector(".youtube").onclick = function () {
        window.location.href = "https://www.youtube.com/@hadidigitalworld";
    };

    document.querySelector(".telegram").onclick = function () {
        window.location.href = "https://t.me/+8poprzDCOVUzZjFk";
    };
    document.querySelector(".btn.telegram-channel").onclick = function () {
        window.location.href = "https://t.me/+8poprzDCOVUzZjFk ";
    };
});



// hide and show button
function toggleInfo() {
    var info = document.getElementById("info");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}