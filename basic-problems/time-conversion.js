// Given a time in -hour AM/PM format, convert it to military (-hour) time.

function main() {
    var time = readLine();
    var l, militaryTime, meridian, timeParts;
    l = time.length;
    meridian = time.slice(l - 2).toLowerCase();
    militaryTime = time.slice(0, l - 2);
    timeParts = militaryTime.split(":");

    if (meridian == "pm") {
        timeParts[0] = parseInt(timeParts[0]);
        timeParts[0] += 12;
        if (timeParts[0] > 23) {
            timeParts[0] = timeParts[0] - 12;
        }
    } else {
        if (timeParts[0] == "12") {
            timeParts[0] = "00";
        }
    }

    militaryTime = timeParts[0] + ":" + timeParts[1] + ":" + timeParts[2];
    console.log(militaryTime);
}
