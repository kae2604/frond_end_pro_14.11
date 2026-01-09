'use strict';

const ul = document.body.querySelector('.list');

ul.addEventListener('click', (event) => {
    const liClicked = event.target.closest('.list_item');
    const removeBtn = event.target.closest('.button_Li');
    if (removeBtn){
        liClicked.remove();
    } else {
        if (!liClicked) return;
        const isSelected = liClicked.classList.contains('selected');
        ul.querySelectorAll('.list_item').forEach(li => {
            li.classList.remove('selected');
        })
        if (!isSelected){
            liClicked.classList.add('selected');
        }
    }
});

const btn = document.querySelector('.button');
const li = document.querySelector('.list_item');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('.input');
    let textFromInput = input.value.trim();
    if (!textFromInput){
        alert("Please enter something");
        return;
    }
    const liNew = li.cloneNode(true);
    const textOfList = liNew.querySelector('.text_item');
    textOfList.textContent = textFromInput;
    input.value = "";
    ul.append(liNew);
})




























