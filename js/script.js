'use strict';

const container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);

const h1 = document.querySelector('h1');
container.prepend(h1);

const card1 = document.createElement('div');
card1.className = 'card';
container.append(card1);

const shortText1 = document.createElement('h3');
shortText1.textContent = 'This is a card #1';
card1.prepend(shortText1);

const btn = document.createElement('button');
btn.dataset.readMoreBtn = "";
btn.textContent = 'Read More';
btn.style.width = '100px'
card1.append(btn);

let longText1 = document.createElement('p');
longText1.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
longText1.className = 'hidden';
card1.append(longText1);



const card2 = card1.cloneNode(true);
container.append(card2);

const shortText2 = card2.querySelector('h3');
shortText2.textContent = 'This is a card #2';
card2.prepend(shortText2);

const longText2 = card2.querySelector('p');
longText2.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
card2.prepend(shortText2);



const card3 = card1.cloneNode(true);
container.append(card3);

const shortText3 = card3.querySelector('h3');
shortText3.textContent = 'This is a card #3';
card3.prepend(shortText3);

const longText3 = card3.querySelector('p');
longText3.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';

card3.prepend(shortText3);


const btnClone = btn.cloneNode(true);

const card4 = document.body.querySelector('.card4');
card4.className = 'card';
const shortText4 = card4.querySelector('h3');
shortText4.textContent = 'This is a card #4 from HTML';
const longText4 = card4.querySelector('p');
longText4.className = 'hidden';
let btn4 = card4.querySelector('button');
const btnClone4 = btn.cloneNode(true);
card4.replaceChild(btnClone4, btn4)
container.append(card4);


const card5 = document.body.querySelector('.card5');
card5.className = 'card';
const shortText5 = card5.querySelector('h3')
shortText5.textContent = 'This is a card #5 from HTML';
const longText5 = card5.querySelector('p');
longText5.className = 'hidden';
let btn5 = card5.querySelector('button');
const btnClone5 = btn.cloneNode(true);
card5.replaceChild(btnClone, btn5)
container.append(card5);


container.addEventListener('click', (event) => {
    const button = event.target.closest('[data-read-more-btn]');
    if (!button ) return;
    const card = button.closest('.card');
    const hiddenParagraph = card.querySelector('.hidden');
    hiddenParagraph.classList.toggle('expanded');
    button.textContent = hiddenParagraph.classList.contains('expanded') ? 'Hide' : 'Read More';
})

