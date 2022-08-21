function getInputElement(inputId) {
    const InputFieldId = document.getElementById(inputId);
    const InputFieldString = InputFieldId.value;
    const InputField = parseFloat(InputFieldString);
    if (isNaN(InputField) || typeof (InputField) !== 'number') {
        return alert('Invalid Value')
    }
    return InputField;
}
function getInnerField(fieldId) {
    const fieldIt = document.getElementById(fieldId);
    const fieldString = fieldIt.innerText;
    const field = parseFloat(fieldString);
    return field;
}
function setAmountById(innerId, setAmount) {
    const innerField = document.getElementById(innerId);
    innerField.innerText = setAmount;
}
function calculateTotalExpense() {
    const food = getInputElement('food');
    const rent = getInputElement('rent');
    const clothes = getInputElement('clothes');
    const totalExpense = food + rent + clothes;
    if (isNaN(totalExpense)) {
        return
    }
    setAmountById('total-expense', totalExpense)
}
function balance() {
    const income = getInputElement('income');
    const totalExpense = getInnerField('total-expense')
    const totalBalance = income - totalExpense;
    setAmountById('balance', totalBalance)

}
function savingBalane() {
    const totalBalance = getInnerField('balance');
    const inputParcent = getInputElement('parcent');
    const saveBalance = totalBalance * inputParcent / 100;
    if (isNaN(saveBalance)) {
        return;
    }
    setAmountById('saving-amount', saveBalance);
    const remainingBalance = totalBalance + saveBalance;
    setAmountById('reamining-balances', remainingBalance)
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateTotalExpense();
    balance();

})
document.getElementById('save-btn').addEventListener('click', function () {
    console.log('CLICKED')
    savingBalane();
})