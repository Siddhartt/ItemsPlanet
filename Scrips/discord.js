try {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/801591574555262977/o386IYx_7pGvC0GgXjCgwKheT52xhByrXxnaz7CE2XYLGtOcsEIac2lsy-YtxO50l7bw");
    request.setRequestHeader('Content-type', 'application/json');
    var CNT = `\`\`\`Access: ${new Date()} 
Page: ${window.location}\`\`\``
    var params = {
        username: "Itemsplanet",
        avatar_url: "https://cdn.discordapp.com/icons/762063042166652938/2cf3ff965edf921b66afd2211a8c122b.webp?size=128",
        content: CNT
    }
    request.send(JSON.stringify(params));
} catch {
    console.log("")
}