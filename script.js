const root = document.getElementById('root');
const mainContainer = document.getElementById('main-container');

//create modal elements
const modal = document.createElement('div');
const modalHeader = document.createElement('h1');
const modalText = document.createElement('p');
const buttonsContainer = document.createElement('div');
const modalButtonBack = document.createElement('button');
const modalButtonStay = document.createElement('button');
const goBack = document.createElement('a');
const congrats = document.createElement('img');

//giving classnames to created elements
modal.className = 'modal';
modalHeader.className = 'modal-header';
modalText.className = 'modal-text';
modalButtonBack.className = 'modal-button-back';
modalButtonStay.className = 'modal-button-stay';
buttonsContainer.className = 'modal-buttons-container';
congrats.className = 'modal-pic';

//styles
modal.style.display = 'none';

//functions
modalButtonStay.onclick = () => stayButtonHandle();
modalButtonBack.onclick = () => backButtonHandle();


modalButtonBack.textContent = 'return to main page';
modalButtonStay.textContent = 'close';
congrats.setAttribute('src', '../assets/pictures/success.png')


goBack.append(modalButtonBack);
buttonsContainer.append(goBack, modalButtonStay)
modal.append(modalHeader, modalText, congrats, buttonsContainer);
root.append(modal);

let purchased;
let price;

// on purchase button click
const clickHandle = (id) => {
    if (id === 'first') {
        purchased = 'regular package'
        price = 69.95;
    }
    else if (id === 'second') {
        purchased = 'extra package';
        price = 139.90.toFixed(2);
    }
    else {
        purchased = 'full package';
        price = 209.85;
    }
    //show modal
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    mainContainer.style.opacity = 0.1;
    modal.style.opacity = 1;
    //content
    modalHeader.textContent = `Thanks for Purchasing!`;
    modalText.textContent = `You Purchased ${purchased} for $${price}`
}


const stayButtonHandle =() => {
    modal.style.display = 'none';
    mainContainer.style.opacity = 1;
}

const backButtonHandle = () => {
    goBack.setAttribute('href', '../index.html');
    modal.style.display = 'none';
}