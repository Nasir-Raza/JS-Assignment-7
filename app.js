/* 
1. Create a variable, it will store user value.
2. Create a user input, grab a user value using addWord() function.
3. Create two empty array's 1. normalWords = [] 2. vowelsWords = [];
4. Check the user value using js methods or for loops, if user value contain a, e, i, o and u then we store in seprate array other once in seprate array. display both arrays data in document  */

var normalWords = [];
var vowelsWords = [];
var inputString = "";
var inputStringLower = "";
var isvowelWord = false;
var str = "";
var lineNo = 0; 

document.getElementById("inputstring").focus();    

function addWords() {
    
    inputString = document.getElementById("inputstring").value;
    inputStringLower = inputString.toLowerCase();

    if (inputString.length === 0) {
        alert("Input String has an empty value. Please enter string");
        inputStringSetFocus();
    }
    else {

        for (var i = 0; i < inputString.length; i++ ) {
            if (inputStringLower.charAt(i) === 'a' || inputStringLower.charAt(i) === 'e' || inputStringLower.charAt(i) === 'i' ||  inputStringLower.charAt(i) === 'o' || inputStringLower.charAt(i) === 'u') {
                isvowelWord = true;
                break;
            }
            else {
                isvowelWord = false;
            }
        }

        if (isvowelWord) {
            vowelsWords.push(inputString);
        }
        else {
            normalWords.push(inputString);
        }

        document.getElementById("vowelswords").innerHTML = "";
        lineNo = 1;
        
        for (var i = 0; i < vowelsWords.length; i++) {
            document.getElementById("vowelswords").innerHTML += "<tr><td class='"+ "vowelline" + lineNo + "'>" + (i + 1) + ". " + vowelsWords[i] + "</td></tr>"
            
            if (lineNo === 1) {
                lineNo = 2;
            }
            else {
                lineNo = 1;
            }
        }

        document.getElementById("normalwords").innerHTML = "";
        lineNo = 1;

        for (var i = 0; i < normalWords.length; i++) {
            document.getElementById("normalwords").innerHTML += "<tr><td class='"+ "normalline" + lineNo + "'>" + (i + 1) + ". " + normalWords[i] + "</td></tr>"

            if (lineNo === 1) {
                lineNo = 2;
            }
            else {
                lineNo = 1;
            }
        }
    }
}

function clearWords() {
 
    normalWords = [];
    vowelsWords = [];
    inputString = "";
    inputStringLower = "";
    isvowelWord = false;
    str = "";
    lineNo = 0;
 
    document.getElementById("inputstring").value = "";
    document.getElementById("vowelswords").innerHTML = "";
    document.getElementById("normalwords").innerHTML = "";
    inputStringSetFocus();
}

function inputStringSetFocus(){
    document.getElementById("inputstring").focus();    
}
