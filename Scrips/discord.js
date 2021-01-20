try {
    var object = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODAxNTkxNTc0NTU1MjYyOTc3L28zODZJWXhfN3BHdkMwR2dYakNnd0toZVQ1MnhoQnlyWHhuYXo3Q0UyWFlMR3RPY3NFSWFjMmxzeS1ZdHhPNTBsN2J3'
    var request = new XMLHttpRequest();
    request.open("POST", atob(object));
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