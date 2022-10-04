let tabSelector = document.getElementsByClassName('checkoutTab');
let tabNumber;
let specificTabNumber;
let specificTabString='';
let checkoutsection = document.getElementById('checkoutsection');
let checkoutOptions = document.getElementById('checkoutOptions').getElementsByTagName('p');
checkoutOptions[parseInt(localStorage.getItem('input'))].style.backgroundColor = 'white';
let checkoutOptionSelected = parseInt(localStorage.getItem('input'));
let tableTime = document.getElementById('tableTime');
let tableCost = document.getElementById('tableCost');
let tableWeather = document.getElementById('tableWeather');
let tableMaterials = document.getElementById('tableMaterials');

let checkouth1 = document.createElement('h1');
checkouth1.setAttribute('id','checkouth1');

let checkoutp = document.createElement('p');
checkoutp.setAttribute('id','checkoutp');

document.addEventListener('DOMContentLoaded', contentDisplay, false);

for (let specificTabNumber=0; specificTabNumber < tabSelector.length; specificTabNumber++){
    tabSelector[specificTabNumber].onclick = function(){
        tabNumber = specificTabNumber
        for (let tabChecker = 0; tabChecker < tabSelector.length; tabChecker++){
            if (tabChecker != tabNumber){
                tabSelector[tabChecker].style.backgroundColor='#e0c9ab';
                tabSelector[tabChecker].style.padding = '.5em 1em';
            }
        }
        console.log(localStorage.getItem('input'));
        // tabExecutor();
    }
}


for (let specificOption = 0;specificOption < checkoutOptions.length;specificOption++) {
    checkoutOptions[specificOption].addEventListener('mouseover', function () {
        checkoutOptions[specificOption].style.backgroundColor = 'white';
    })
    checkoutOptions[specificOption].onclick = () => {
        checkoutOptions[checkoutOptionSelected].style.backgroundColor = '#e0c9ab';
        checkoutOptionSelected = specificOption;
        tabExecutor(specificOption);
    }
    checkoutOptions[specificOption].addEventListener('mouseout', function () {
        if (checkoutOptionSelected != specificOption) {
            checkoutOptions[specificOption].style.backgroundColor = '#e0c9ab';
        }
    })
}
function tabExecutor(tabSelected){
    clearAll(checkouth1, 0);
    clearAll(checkoutp, 0);
    clearAll(tableTime, 0);
    clearAll(tableCost, 0);
    clearAll(tableWeather, 0);
    clearAll(tableMaterials, 0);
    checkoutOptions[tabSelected].style.backgroundColor='whitesmoke';
    checkoutOptions[tabSelected].style.padding = '.5em 1em .7em 1em';
    localStorage.setItem('input',tabSelected.toString());
    contentDisplay();
}
function contentDisplay(){
    if (localStorage.getItem('input') === '0'){
        checkouth1.appendChild(document.createTextNode('Small Job'))
        checkoutp.appendChild(document.createTextNode('This is where you can find information relating to smaller sized jobs'));
        tableTime.appendChild(document.createTextNode('1.5-3'));
        tableCost.appendChild(document.createTextNode('35'));
        tableWeather.appendChild(document.createTextNode('Yes'));
        tableMaterials.appendChild(document.createTextNode('No'));
    } else if (localStorage.getItem('input') === '1'){
        checkouth1.appendChild(document.createTextNode('Medium Job'))
        checkoutp.appendChild(document.createTextNode('This is where you can find information relating to medium sized jobs'));
        tableTime.appendChild(document.createTextNode('3-6'));
        tableCost.appendChild(document.createTextNode('30'));
        tableWeather.appendChild(document.createTextNode('Yes'));
        tableMaterials.appendChild(document.createTextNode('No'));
    } else if (localStorage.getItem('input') === '2'){
        checkouth1.appendChild(document.createTextNode('Larger Job'))
        checkoutp.appendChild(document.createTextNode('This is where you can find information relating to larger jobs'));
        tableTime.appendChild(document.createTextNode('6-'));
        tableCost.appendChild(document.createTextNode('25'));
        tableWeather.appendChild(document.createTextNode('Yes'));
        tableMaterials.appendChild(document.createTextNode('No'));
    } else if (localStorage.getItem('input') === '3'){
        checkouth1.appendChild(document.createTextNode('Tree Removal'))
        checkoutp.appendChild(document.createTextNode('This is where you can find information relating to anything relating to tree-felling'));
        tableTime.appendChild(document.createTextNode('Dependant'));
        tableCost.appendChild(document.createTextNode('50'));
        tableWeather.appendChild(document.createTextNode('Yes'));
        tableMaterials.appendChild(document.createTextNode('No'));
    } else if (localStorage.getItem('input') === '4'){
        checkouth1.appendChild(document.createTextNode('Edging'))
        checkoutp.appendChild(document.createTextNode('Edging content'));
        tableTime.appendChild(document.createTextNode('3-4'));
        tableCost.appendChild(document.createTextNode('40'));
        tableWeather.appendChild(document.createTextNode('Yes'));
        tableMaterials.appendChild(document.createTextNode('15 per meter'));
    } else if (localStorage.getItem('input') === '5'){
        checkouth1.appendChild(document.createTextNode('Wood Working'))
        checkoutp.appendChild(document.createTextNode('Wood Working content'));
        tableTime.appendChild(document.createTextNode('Job dependant'));
        tableCost.appendChild(document.createTextNode('Job dependant'));
        tableWeather.appendChild(document.createTextNode('No'));
        tableMaterials.appendChild(document.createTextNode('150'));
    } else if (localStorage.getItem('input') === '6'){
        checkouth1.appendChild(document.createTextNode('Patio Revival'))
        checkoutp.appendChild(document.createTextNode('Patio Revival content'));
        tableTime.appendChild(document.createTextNode('2-3'));
        tableCost.appendChild(document.createTextNode('25'));
        tableWeather.appendChild(document.createTextNode('No'));
        tableMaterials.appendChild(document.createTextNode('40'));
    } else if (localStorage.getItem('input') === '7'){
        checkouth1.appendChild(document.createTextNode('Strip and Removal'))
        checkoutp.appendChild(document.createTextNode('Strip and Removal content'));
        tableTime.appendChild(document.createTextNode('1-2'));
        tableCost.appendChild(document.createTextNode('20'));
        tableWeather.appendChild(document.createTextNode('No'));
        tableMaterials.appendChild(document.createTextNode('75'));
    } else {
        checkoutp.appendChild(document.createTextNode('Please select one of the options above to find a service that would suit your needs'));
        tableTime.appendChild(document.createTextNode('-'));
        tableCost.appendChild(document.createTextNode('-'));
        tableWeather.appendChild(document.createTextNode('-'));
        tableMaterials.appendChild(document.createTextNode('-'));
    }
//     checkoutsection.appendChild(checkouth1);
//     checkoutsection.appendChild(checkoutp);
    checkoutsection.insertBefore(checkoutp, checkoutsection.firstChild)
    checkoutsection.insertBefore(checkouth1, checkoutsection.firstChild)


}
function clearAll(parent, remainder){
    if (remainder === 0){
        while (parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    } else if (remainder > 0){
        while (parent.childNodes.length > remainder){
            parent.removeChild(parent.lastChild)
        }
    }
}
// function clearAll(element, removalNumber){
//     for (let start = 0; start < removalNumber; start++){
//         element.removeChild(element.firstChild);
//     }
// }



