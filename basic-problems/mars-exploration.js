/* Mars Exploration
Sami's spaceship crashed on Mars! She sends  sequential SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission.
Given the signal received by Earth as a string,
determine how many letters of Sami's SOS have been changed by radiation.
 */


function main() {
    var S = readLine();
    var l = S.length,
        i, cnt = 0,
        subStr;
    for (i = 0; i < l; i = i + 3) {
        if (S[i] != "S") {
            cnt++;
        }
        if (S[i + 1] != "O") {
            cnt++;
        }
        if (S[i + 2] != "S") {
            cnt++;
        }
    }
    console.log(cnt);
}
