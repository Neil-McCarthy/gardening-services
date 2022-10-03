let body = document.querySelector("body");
let main = document.querySelector("main");
let serviceOptionsList = main.getElementsByClassName('serviceOption');
let backgroundCoverDiv = document.createElement('div');
backgroundCoverDiv.setAttribute('id','backgroundCoverDiv');
let productDisplayOptionSection = document.createElement('section');
productDisplayOptionSection.setAttribute('id','productDisplayOptionSection');
let productDisplayOptionH1 = document.createElement('h1');
let productDisplayOptionP = document.createElement('p');
let productDisplayOptionSpan = document.createElement('span');
productDisplayOptionSpan.appendChild(document.createTextNode('X'));
let productDisplayOptionForm = document.createElement('form');
productDisplayOptionForm.setAttribute('id','contentBoxform');
productDisplayOptionForm.action = 'checkout.html';
let productDisplayOptionInput = document.createElement('input');
productDisplayOptionInput.type = 'submit';
productDisplayOptionInput.value = 'Book Now!'


for(let specificSection = 0;specificSection<serviceOptionsList.length;specificSection++){
    serviceOptionsList[specificSection].onclick =()=>{
        createProductDisplay(specificSection)
    }
}


productDisplayOptionSpan.onclick = function() {
    backgroundCoverDiv.remove();
    clearAll();
}
window.onclick = function(event) {
    if (event.target == backgroundCoverDiv) {;
        backgroundCoverDiv.remove();
        clearAll();
    }
}
function clearAll(){
    while (productDisplayOptionH1.firstChild){
        productDisplayOptionH1.removeChild(productDisplayOptionH1.firstChild);
    }
    while (productDisplayOptionP.firstChild){
        productDisplayOptionP.removeChild(productDisplayOptionP.firstChild);
    }
    productDisplayOptionSection.parentNode.removeChild(productDisplayOptionSection);
}

function createProductDisplay(productSelected){
    localStorage.setItem('input',productSelected);
    productDisplayOptionH1.innerHTML = serviceOptionsList[productSelected].getElementsByTagName('h1')[0].innerHTML;
    if (productSelected == 0){
        productDisplayOptionP.appendChild(document.createTextNode('Our small jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 1){
        productDisplayOptionP.appendChild(document.createTextNode('Our medium jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 2){
        productDisplayOptionP.appendChild(document.createTextNode('Our large jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 3){
        productDisplayOptionP.appendChild(document.createTextNode('Our bingus jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 4){
        productDisplayOptionP.appendChild(document.createTextNode('Our dingus jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 5){
        productDisplayOptionP.appendChild(document.createTextNode('Our small jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 6){
        productDisplayOptionP.appendChild(document.createTextNode('Our small jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 7){
        productDisplayOptionP.appendChild(document.createTextNode('Our small jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    if (productSelected == 8){
        productDisplayOptionP.appendChild(document.createTextNode('Our small jobs are ideal for smaller gardens that just need a little touch up. Grass cutting, hedge clipping, weed pulling. James will see to it that any imperfections will be perfected and anything unwanted can be rooted out. A job like this would ideally be done in a mornings work and would cost you around X amount. If this type of jub would suit you then click on through to see contact details for booking.'));
    }
    productDisplayOptionForm.appendChild(productDisplayOptionInput);
    productDisplayOptionSection.appendChild(productDisplayOptionH1);
    productDisplayOptionSection.appendChild(productDisplayOptionP);
    productDisplayOptionSection.appendChild(productDisplayOptionForm);
    productDisplayOptionSection.appendChild(productDisplayOptionSpan);
    backgroundCoverDiv.appendChild(productDisplayOptionSection);
    body.appendChild(backgroundCoverDiv);
}