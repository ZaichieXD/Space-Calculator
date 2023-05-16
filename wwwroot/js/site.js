
let operator = "";
let operationNumber = 0;

function insertValueToTextBox(value) {
    if (document.getElementById("inputTextBox").value == "44043") {
        clearTextBoxValue();
    }
    else {
        document.getElementById("inputTextBox").value += value;
    }

}

function clearTextBoxValue() {
    document.getElementById("inputTextBox").value = "";
    operationNumber = 0;
    operator = "";
}

function setOperationToUse(operation) {
    if (document.getElementById("inputTextBox").value != "44043") {
        if (document.getElementById("inputTextBox").value != "") {
            if (operator == "") {
                operator = operation;
                insertValueToTextBox(operation);
            }
            else {
                document.getElementById("inputTextBox").value = document.getElementById("inputTextBox").value.replace(operator, operation);
                operator = operation;
            }
        }
    }
    else {
        clearTextBoxValue();
    }
}

function calculateUsingTheOperator() {

    operationNumber = document.getElementById("inputTextBox").value;
    operationNumber.includes("+") ? operator = "+" : operationNumber.includes("-") ? operator = "-" : operationNumber.includes("*") ? operator = "*" : operationNumber.includes("/") ? operator = "/" : operator = "";
    const solvedOperation = operationNumber.split(operator);

    let result = 0;

    if (operationNumber.includes("+") == false || operationNumber.includes("-") == false || operationNumber.includes("*") == false || operationNumber.includes("/") == false) {

        switch (operator) {
            case "+":
                result = parseInt(solvedOperation[0]) + parseInt(solvedOperation[1]);
                break;
            case "-":
                result = parseInt(solvedOperation[0]) - parseInt(solvedOperation[1]);
                break;
            case "*":
                result = parseInt(solvedOperation[0]) * parseInt(solvedOperation[1]);
                break;
            case "/":
                result = parseInt(solvedOperation[0]) / parseInt(solvedOperation[1]);
                break;
        }
        document.getElementById("inputTextBox").value = result;
    } else {
        document.getElementById("inputTextBox").value = 0;
    }

    if (result == "NaN" || result == "Infinity") {
        document.getElementById("inputTextBox").value = 44043;
    }
}