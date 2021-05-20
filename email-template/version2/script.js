function getInput() {
    var variable1 = document.getElementById('input1').value;
    var variable2 = document.getElementById('input2').value;
    var variable3 = document.getElementById('input3').value;
    var variable4 = document.getElementById('input4').value;
    var outputMessage = 'The user input is: ' + variable1 + ' ' + variable2 + ', ' + variable3 + ', ' + variable4;
    document.getElementById('output').innerHTML = outputMessage;
    alert(outputMessage);
}