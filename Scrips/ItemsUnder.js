document.addEventListener("DOMContentLoaded", function (event) {
    CheckUnder();
})

function Append(A) {
    var search = ""
    
    if(A == 10){
        search = "tien"
    }else if(A == 15){
        search = "vijftien"
    }else if(A == 25){
        search = "vijfentwintig"
    }else{
        viernulvier()
        return;
    }

    fetch("https://api.arcticstudio.info:8443/api/Items/Under/" + search)
        .then(response => response.json())
        .then((data => {

            data = data.reverse()
            var AppendTo = document.getElementById("UnderAppend")
            for (var x = 0; x < (Object.keys(data).length); x++) {
                AppendTo.innerHTML += `
            <div class="column">
                <div class="Item">
                    <p class="Name">${data[x].ItemName}</p>
                    <p class="Desc">${data[x].Description}</p>
                    <p class="Price">${data[x].Price}</p>
                    <img alt="${data[x].ID}" class="Image" src="${data[x].ImageLink}" />
                    <a class="Link" href="${data[x].Link}" target="_blank"><button aria-label="${data[x].ItemName}" class="CheckOut">Check Out</button></a>
                </div>
            </div>`
            }
        }));
}

function CheckUnder() {
    if (document.URL.includes("?u=")) {
        var url = new URL(window.location.href)
        var amount = url.searchParams.get("u")
        if (amount == 10 || amount == 15 || amount == 25) {
            document.getElementById("DESC").innerHTML = `You can find all the items under $${amount} here.`
            Append(parseInt(amount))
        }
        else {
            window.location.replace("/404.html");
        }
    }
};

function viernulvier(){
    window.location.replace("/404.html");
}