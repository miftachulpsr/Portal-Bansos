document.getElementById("menu-btn").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var mainContent = document.querySelector(".main-content");

    if (sidebar.style.width === "250px" || sidebar.style.width === "") {
        sidebar.style.width = "60px";
        mainContent.style.marginLeft = "60px";
        mainContent.style.width = "calc(100% - 60px)";
    } else {
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
        mainContent.style.width = "calc(100% - 250px)";
    }
});