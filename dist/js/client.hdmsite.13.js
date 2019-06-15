function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("https://passport.mscpn.com/getusers.php", function(response) {
    var json = JSON.parse(response);
    document.getElementById("amount").innerHTML = json.users.length;
});

readTextFile("https://passport.mscpn.com/getonline.php", function(response) {
    var json = JSON.parse(response);
    document.getElementById("amountplaying").innerHTML = json.users.length - 1;
});
