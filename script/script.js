const billsTable = document.getElementById('billsTable');
const miscExpTable= document.getElementById('miscExpenseTable');
const addSelect = document.getElementById('addSelect');
let addSelectOption = addSelect.selectedIndex;
const budgetGoals = document.getElementById('budgetGoalsTable');
const budgetExpenses = document.getElementById('budgetExpensesTable');
const sum = document.getElementById('summaryTable');
const misc = document.getElementById('miscExpenseTable');
const calculateExpenses = document.getElementById('calculateBtn');
let calculateBills = document.getElementById('billTotalBal');
let billsTitleStored = JSON.parse(localStorage.getItem('billsTitleData'));
let billsDueStored = JSON.parse(localStorage.getItem('billsDueData'));
let billsAmountStorage = JSON.parse(localStorage.getItem('billsAmountData'));
let name, date, amount;
// Create insertMiscExp
//create insertBudget
let billRow = 1;
let miscExpRow = 1;


function cellInput(tableName, nameItem, dateItem, payItem, rowVar) {
    let row = tableName.insertRow(rowVar);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
    cell.classList.add('nameOfBill');
    cell2.classList.add('dateDue');
    cell3.classList.add('amountToPay');
}

function insertBill() {
    name = document.getElementById('billName').value;
    date = document.getElementById('billDate').value;
    amount = document.getElementById('billAmount').value;
    cellInput(billsTable, 'nameOfBill','dateDue','amountToPay', billRow);
    billRow++
    hideInput('billName', 'billDate', 'billAmount', 'billInput');
    saveData();
    location.reload();
}

function insertMiscExp() {
    name = document.getElementById('billName').value;
    date = document.getElementById('billDate').value;
    amount = document.getElementById('billAmount').value;
    cellInput(miscExpTable, 'nameOfMiscExp','dateMiscExp','amountMiscExp');
    miscExpRow++
    hideInput('billName', 'billDate', 'billAmount', 'billInput');
    saveData();
    location.reload();
}

function selectOptionAdd() {
    if ( document.getElementById("addBill").selected) {
        showInput('billInput')
    } else if (document.getElementById("addMiscExp").selected) {
        showInput('miscExpInput')
    } else if (document.getElementById("addBudget").selected) {
        showInput('addBudgetInput')
    } else if (document.getElementById("addBudgetExpense").selected) {
        showInput('BudgetExpenseInput')
    } else {}
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

function saveData() {
    if (billsTitleStored !== null) {
        localStorage.clear()
    }
    var billsTitle = document.querySelectorAll('.nameOfBill');
    var billsTitleStorage = [];
    var billsPayStorage = [];
    var billsDueStorage = [];
    for (i = 0; i < billsTitle.length; i++) {
        billsTitleStorage.push(billsTitle[i].innerText);
    }
    let billsDue = document.querySelectorAll('.dateDue');
    for (i = 0; i < billsDue.length; i++) {
        billsDueStorage.push(billsDue[i].innerText);
    }

    let billsPay = document.querySelectorAll('.amountToPay');
    for (i = 0; i < billsPay.length; i++) {
        billsPayStorage.push(billsPay[i].innerText);
    }
    localStorage.setItem("billsTitleData", JSON.stringify(billsTitleStorage));
    localStorage.setItem("billsDueData", JSON.stringify(billsDueStorage));
    localStorage.setItem("billsAmountData", JSON.stringify(billsPayStorage));
    console.log("saved!")
    billShowTotal();
}

function onScreenLoad() {
    if (billsTitleStored !== null) {
        for (i = 0; i < billsTitleStored.length; i++) {
            let row = billsTable.insertRow(billRow);
            let cell = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            billRow++;
            cell.innerHTML = billsTitleStored[i];
            cell2.innerHTML = billsDueStored[i];
            cell3.innerHTML = billsAmountStorage[i];
            cell.classList.add('nameOfBill');
            cell2.classList.add('dateDue');
            cell3.classList.add('amountToPay');
        }
    }
}


function billShowTotal() {
    if (billsTitleStored !== null) {
        let total = 0;
        for (i = 0; i < billsAmountStorage.length; i++) {
            total = total + parseInt(billsAmountStorage[i]);
            calculateBills.innerHTML = total;
        }
    }
}

function clearData() {
    localStorage.clear();
    location.reload();
}

billShowTotal();
onScreenLoad();