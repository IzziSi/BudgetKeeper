const billsTable = document.getElementById('billsTable');
const miscExpTable= document.getElementById('miscExpenseTable');
const addSelect = document.getElementById('addSelect');
const budgetGoals = document.getElementById('budgetGoalsTable');
const budgetExpenses = document.getElementById('budgetExpensesTable');
const sum = document.getElementById('summaryTable');
const misc = document.getElementById('miscExpenseTable');
const calculateExpenses = document.getElementById('calculateBtn');
let addSelectOption = addSelect.selectedIndex;
let calculateBills = document.getElementById('billTotalBal');
let billsTitleStored = JSON.parse(localStorage.getItem('billsTitleData'));
let billsDueStored = JSON.parse(localStorage.getItem('billsDueData'));
let billsAmountStorage = JSON.parse(localStorage.getItem('billsAmountData'));
let miscExpTitleStored= JSON.parse(localStorage.getItem('miscExpTitleData'));
let miscExpDateStored= JSON.parse(localStorage.getItem('miscExpDateData'));
let miscExpPayStored= JSON.parse(localStorage.getItem('miscExpPayData'));
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
    cell.classList.add(nameItem);
    cell2.classList.add(dateItem);
    cell3.classList.add(payItem);
}

function insertBill() {
    name = document.getElementById('billName').value;
    date = document.getElementById('billDate').value;
    amount = document.getElementById('billAmount').value;
    cellInput(billsTable, 'nameOfBill','billDateDue','amountToPay', billRow);
    billRow++
    hideInput('billName', 'billDate', 'billAmount', 'billInput');
    saveData();
    location.reload();
}

function insertMiscExp() {
    name = document.getElementById('miscExpName').value;
    date = document.getElementById('miscExpDate').value;
    amount = document.getElementById('miscExpAmount').value;
    cellInput(miscExpTable, 'nameMiscExp','dateMiscExp','amountMiscExp', miscExpRow);
    miscExpRow++
    hideInput('miscExpName', 'miscExpDate', 'miscExpAmount', 'miscExpInput');
    saveData();
    /* location.reload(); */
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
/**
 * Pulls the created classes values, inserts them into arrays
 * Pushes the arrays into JSON strings then into local storage
 * Clears the old data, saves the new information that is on the screen.
 **/
function saveData() {
    let billsTitle = document.querySelectorAll('.nameOfBill');
    let billsDue = document.querySelectorAll('.billDateDue');
    let billsPay = document.querySelectorAll('.amountToPay');
    let billsTitleStorage = [];
    let billsPayStorage = [];
    let billsDueStorage = [];
    let miscExpTitle = document.getElementById('miscExpName');
    let miscExpDate = document.getElementById('miscExpDate');
    let miscExpPay = document.getElementById('miscExpAmount');
    let miscExpTitleStorage = [];
    let miscExpDateStorage = [];
    let miscExpPayStorage = [];
  /*   if (billsTitleStored !== null) {
        localStorage.clear()
    } */
    for (let i = 0; i < billsTitle.length; i++) {
        billsTitleStorage.push(billsTitle[i].innerText);
        billsDueStorage.push(billsDue[i].innerText);
        billsPayStorage.push(billsPay[i].innerText);
    }
    for (let i = 0; i < miscExpTitle.length; i++) {
        miscExpTitleStorage.push(miscExpTitle[i].innerText);
        miscExpDateStorage.push(miscExpDate[i].innerText);
        miscExpPayStorage.push(miscExpPay[i].innerText);
    }
    localStorage.setItem("billsTitleData", JSON.stringify(billsTitleStorage));
    localStorage.setItem("billsDueData", JSON.stringify(billsDueStorage));
    localStorage.setItem("billsAmountData", JSON.stringify(billsPayStorage));
    localStorage.setItem('miscExpTitleData', JSON.stringify(miscExpTitleStorage));
    localStorage.setItem('miscExpDateData', JSON.stringify(miscExpDateStorage));
    localStorage.setItem('miscExpPayData', JSON.stringify(miscExpPayStorage));
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
            cell2.classList.add('billDateDue');
            cell3.classList.add('amountToPay');
        }
    }
    if (miscExpTitleStored !== null) {
        for (i = 0; i < miscExpTitleStored.length;i++) {
            let row = miscExpTable.insertRow(miscExpRow);
            let cell = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            miscExpRow++;
            cell.innerHTML = miscExpTitleStored[i];
            cell2.innerHTML = miscExpDateStored[i];
            cell3.innerHTML = miscExpPayStored[i];
            cell1.classList.add('nameOfMiscExp');
            cell2.classList.add('dateMiscExp');
            cell3.classList.add('paidMiscExp');
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