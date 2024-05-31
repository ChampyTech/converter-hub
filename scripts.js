var hd = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function updateAll(decValue) {
    var hexValue = "";
    for (var t = decValue; t > 0; t = Math.floor(t / 16)) {
        var i = t % 16;
        hexValue = hd[i] + hexValue;
    }
    var octValue = "";
    for (var t = decValue; t > 0; t = Math.floor(t / 8)) {
        var i = t % 8;
        octValue = i + octValue;
    }
    var binValue = "";
    for (var t = decValue; t > 0; t = Math.floor(t / 2)) {
        var i = t % 2;
        binValue = i + binValue;
    }
    document.getElementById('hex').value = hexValue;
    document.getElementById('dec').value = decValue;
    document.getElementById('oct').value = octValue;
    document.getElementById('bin').value = binValue;
}

function convertFromDec() {
    var decValue = parseInt(document.getElementById('dec').value);
    if (!isNaN(decValue)) {
        updateAll(decValue);
    }
}

function convertFromHex() {
    var hexValue = document.getElementById('hex').value.toUpperCase();
    var decValue = parseInt(hexValue, 16);
    if (!isNaN(decValue)) {
        updateAll(decValue);
    }
}

function convertFromOct() {
    var octValue = document.getElementById('oct').value;
    var decValue = parseInt(octValue, 8);
    if (!isNaN(decValue)) {
        updateAll(decValue);
    }
}

function convertFromBin() {
    var binValue = document.getElementById('bin').value;
    var decValue = parseInt(binValue, 2);
    if (!isNaN(decValue)) {
        updateAll(decValue);
    }
}
