'use strict';

const ul = document.body.querySelector('.list');

ul.addEventListener('click', (event) => {
    const liClicked = event.target.closest('.list_item');
    const removeBtn = event.target.closest('.button_Li');
    if (removeBtn){
        liClicked.remove();
        return;
    }
    if (!liClicked) return;
    const isSelected = liClicked.classList.contains('selected');
    ul.querySelectorAll('.list_item').forEach(li => {
        li.classList.remove('selected');
    })
    if (!isSelected){
        liClicked.classList.add('selected');
    }
});

const btn = document.querySelector('.button');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('.input');
    const textFromInput = input.value.trim();
    if (!textFromInput){
        alert("Please enter something");
        return;
    }
    const liNew = document.createElement('li');
    liNew.className = 'list_item';
    const spanNew = document.createElement('span');
    spanNew.className = 'text_item';
    spanNew.textContent = textFromInput;
    liNew.append(spanNew);
    const buttonNew = document.createElement('button');
    buttonNew.className = 'button_Li';
    buttonNew.textContent = 'X';
    liNew.append(buttonNew);
    ul.append(liNew);
    input.value = "";
})
