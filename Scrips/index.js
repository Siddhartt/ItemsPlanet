document.addEventListener("DOMContentLoaded", function (event) {
    MoreButton()
    GetRandom()
    Popular()
    Load()
});

function MoreButton() {
    fetch('https://api.arcticstudio.info:8443/api/Items/Total/')
        .then(response => response.json())
        .then((data => {
            var MoreButtonDiv = document.getElementById("MoreButton")
            var Pages = data[0].TotalPages

            if (document.URL.includes("?Page=") && (Pages > 1)) {
                var url = new URL(window.location.href)
                var P = url.searchParams.get("Page")
                if (parseInt(Pages) != parseInt(P)) {
                    var url = new URL(window.location.href)
                    var page = parseInt(url.searchParams.get("Page"))
                    MoreButtonDiv.innerHTML = `<a id="NButton" href="/?Page=${page + 1}"><button>MORE</button></a>`
                }else{
                    MoreButtonDiv.innerHTML += '<p>You have reached the end!</p>'
                    MoreButtonDiv.innerHTML += `<a id="NButton" href="/?Page=1"><button>Back to the main page</button></a>`
                }
            } else if (Pages > 1) {
                MoreButtonDiv.innerHTML = '<a id="NButton" href="/?Page=2"><button aria-label="More">MORE</button></a>'
            }
        }))
}

function Load() {
    if (document.URL.includes("/?Page=")) {
        var page = document.URL.split("=")[1]

        fetch('https://api.arcticstudio.info:8443/api/ItemsForWebsite/' + page)
            .then(response => response.json())
            .then((data => {
                var AppendTo = document.getElementById("RECENT")
                for (var x = 0; x < (Object.keys(data.Items).length); x++) {
                    AppendTo.innerHTML += `
            <div class="column">
                <div class="Item">
                    <p class="Name">${data.Items[x].ItemName}</p>
                    <p class="Desc">${data.Items[x].Description}</p>
                    <p class="Price">${data.Items[x].Price}</p>
                    <img alt="${data.Items[x].ID}" class="Image" src="${data.Items[x].ImageLink}" />
                    <a class="Link" href="${data.Items[x].Link}" target="_blank"><button aria-label="${data.Items[x].ItemName}" class="CheckOut">Check Out</button></a>
                </div>
            </div>`
                }
            }));
    } else {
        fetch('https://api.arcticstudio.info:8443/api/ItemsForWebsite/' + 1)
            .then(response => response.json())
            .then((data => {
                var AppendTo = document.getElementById("RECENT")
                for (var x = 0; x < (Object.keys(data.Items).length); x++) {
                    AppendTo.innerHTML += `
                <div class="column">
                    <div class="Item">
                        <p class="Name">${data.Items[x].ItemName}</p>
                        <p class="Desc">${data.Items[x].Description}</p>
                        <p class="Price">${data.Items[x].Price}</p>
                        <img alt="${data.Items[x].ID}" class="Image" src="${data.Items[x].ImageLink}" />
                        <a class="Link" href="${data.Items[x].Link}" target="_blank"><button aria-label="${data.Items[x].ItemName}" class="CheckOut">Check Out</button></a>
                    </div>
                </div>`
                }
            }));
    }
}

function GetRandom() {
    document.getElementById("rbtn").disabled = true;
    document.getElementById("RItem").className = "RandomItem ANIMATION"
    fetch("https://api.arcticstudio.info:8443/api/items/Total")
        .then(response => response.json())
        .then((data) => {
            var json = data
            var RandomPage = Math.floor(Math.random() * json[0].TotalPages + 1)
            fetch('https://api.arcticstudio.info:8443/api/ItemsForWebsite/' + RandomPage)
                .then(response => response.json())
                .then((data) => {
                    var RandomItem = Math.floor(Math.random() * (Object.keys(data.Items).length))
                    document.getElementById("RItem").innerHTML = `
                    <p class="ItemName">${data.Items[RandomItem].ItemName}</p>
                    <p class="ItemDesc">${data.Items[RandomItem].Description}</p>
                    <p class="ItemPrice">${data.Items[RandomItem].Price}</p>
                    <img alt="${data.Items[RandomItem].ID}" class="CardImage" src="${data.Items[RandomItem].ImageLink}" />
                    <a class="Link" href="${data.Items[RandomItem].Link}" target="_blank"><button aria-label="${data.Items[RandomItem].ItemName}">Check Out</button></a>`


                    setTimeout(function () {
                        document.getElementById("RItem").className = "RandomItem"
                        document.getElementById("rbtn").disabled = false;
                    }, 500);
                })
        })
}

function Popular() {
    fetch("https://api.arcticstudio.info:8443/api/Items/Hot")
        .then(response => response.json())
        .then((data => {
            var AppendTo = document.getElementById("PopularAppend")
            for (var x = 0; x < (Object.keys(data.Items).length); x++) {
                AppendTo.innerHTML += `
                <div class="column">
                    <div class="Item">
                        <p class="Name">${data.Items[x].ItemName}</p>
                        <p class="Desc">${data.Items[x].Description}</p>
                        <p class="Price">${data.Items[x].Price}</p>
                        <img alt="${data.Items[x].ID}" class="Image" src="${data.Items[x].ImageLink}" />
                        <a class="Link" href="${data.Items[x].Link}" target="_blank"><button aria-label="${data.Items[x].ItemName}" class="CheckOut">Check Out</button></a>
                    </div>
                </div>`
            }
        }));
}
