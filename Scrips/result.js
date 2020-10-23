document.addEventListener("DOMContentLoaded", function (event) {
    //Search Part
    if (document.URL.includes("?Search=")) {
        var url = new URL(window.location.href)
        var s = url.searchParams.get("Search")
        fetch("https://api.arcticstudio.info:8443/api/items/Search/" + s)
            .then(response => response.json())
            .then((data => {
                var AppendTo = document.getElementById("PopularAppend")
                for (var x = 0; x < (Object.keys(data).length); x++) {
                    AppendTo.innerHTML += `
                    <div class="column">
                        <div class="Item">
                            <p class="Name">${data[x].ItemName}</p>
                            <p class="Desc">${data[x].Description}</p>
                            <p class="Price">${data[x].Price}</p>
                            <img alt="${data[x].ID}" class="Image" src="${data[x].ImageLink}" />
                            <a class="Link" href="${data[x].Link}" target="_blank"><button class="CheckOut">Check Out</button></a>
                        </div>
                    </div>`
                }
                if ((Object.keys(data).length) <= 1) {
                    document.getElementById("ResultText").innerHTML = `<b>${(Object.keys(data).length)}</b> result found for <b>${s}</b>`
                } else {
                    document.getElementById("ResultText").innerHTML = `${(Object.keys(data).length)} results found for ${s}`
                }
            }));
    }
})