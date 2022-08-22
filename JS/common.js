//Common Function for input values :
function findingInput(elementId) {
    const parPlayer = document.getElementById(elementId).value;
    return parseFloat(parPlayer);
};

//Common Function for set values:
function setValues(elementId, value) {

    //validation:
    if (isNaN(value) || value <= 0) {         
        alert('Please input a valid number');
        return;
    };
    document.getElementById(elementId).innerText = value;
};