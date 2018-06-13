const billsTable = document.getElementById('billsTable');
const billInput = document.getElementsByClassName('billInput');
const addSelect = document.getElementById('addSelect').value
const budgetGoals = document.getElementById('budgetGoalsTable');
const budgetExpenses = document.getElementById('budgetExpensesTable');
const sum = document.getElementById('summaryTable');
const misc = document.getElementById('miscExpenseTable');
// Create insertMiscExp
let billRow = 1
let billCell = 0
let billType = []

function insertBill() {
    let name = document.getElementById('billName').value;
    let date = document.getElementById('billDate').value;
    let amount = document.getElementById('billAmount').value;
    let row = billsTable.insertRow(billRow);
    let cell = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
    billRow++
    hideInput('billName', 'billDate', 'billAmount', 'billInput')
}



function selectOptionAdd() {
    if (addSelect == 'Bill') {
        showInput('billInput')
    }
}

function showInput(input) {
    document.getElementsByClassName(input)[0].style.visibility = 'visible';
    document.getElementsByClassName(input)[0].style.display = 'initial';
    document.getElementsByClassName(input)[1].style.visibility = 'visible';
    document.getElementsByClassName(input)[1].style.display = 'initial';
    document.getElementsByClassName(input)[2].style.visibility = 'visible';
    document.getElementsByClassName(input)[2].style.display = 'initial';
    document.getElementsByClassName(input)[3].style.visibility = 'visible';
    document.getElementsByClassName(input)[3].style.display = 'initial';
    document.getElementsByClassName(input)[4].style.visibility = 'visible';
    document.getElementsByClassName(input)[4].style.display = 'initial';
}

function hideInput(name, date, amount, input) {
    document.getElementById(name).value = '';
    document.getElementById(date).value = '';
    document.getElementById(amount).value = '';
    cancel(input)
}

function cancel(input) {
    document.getElementsByClassName(input)[0].style.visibility = 'invisible';
    document.getElementsByClassName(input)[0].style.display = 'none';
    document.getElementsByClassName(input)[1].style.visibility = 'invisible';
    document.getElementsByClassName(input)[1].style.display = 'none';
    document.getElementsByClassName(input)[2].style.visibility = 'invisible';
    document.getElementsByClassName(input)[2].style.display = 'none';
    document.getElementsByClassName(input)[3].style.visibility = 'invisible';
    document.getElementsByClassName(input)[3].style.display = 'none';
    document.getElementsByClassName(input)[4].style.visibility = 'invisible';
    document.getElementsByClassName(input)[4].style.display = 'none';
}