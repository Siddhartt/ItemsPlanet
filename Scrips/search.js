function SearchThis() {
    var ST = document.getElementById("S").value
    if (!ST) return;
    console.log(ST.trim())
    if( ST.trim() === "") return;
    document.getElementById("SBtn").href = `/Result.html?Search=${ST.trim()}`
}

document.addEventListener("DOMContentLoaded", function (event) {
    var input = document.getElementById("S");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("Search").click();
        }
    });
})