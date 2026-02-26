'use strict';

let allUsers = [];
let allAlbums = [];
let allPhotos = [];
let albumId = null;
const statusBox = document.querySelector('#status');
const selectUsers = document.querySelector('#userSelect');
const selectAlbums = document.querySelector('#albumSelect');
const photoBox = document.querySelector('#photos');
const loadBtn = document.querySelector('#loadBtn');
const selectWrapper = document.querySelector('[data-select-wrapper]');

function init(){
    document.addEventListener('DOMContentLoaded', () => {
        getDataByFetch('https://jsonplaceholder.typicode.com/users', allUsers, 'Users')
            .then(usersArray => {
                usersArray.forEach(user => {
                    const option = document.createElement('option');
                    option.textContent = user.name;
                    option.value = user.id;
                    selectUsers.append(option);
                })
            })
        }
    )
}
init();

function getDataByFetch(url, storeArray, textForLoading){
    statusBox.textContent = `Loading ${textForLoading}…`;
    return fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error("HTTP" + response.status)
            } else {
                return response.json()
            }
        })
        .then(usersArray => {
            if (storeArray){
                storeArray.splice(0, storeArray.length, ...usersArray);
                return usersArray;
            }
        })
        .catch(error => {
            statusBox.textContent =  "Error: " + error.message;
        })
        .finally(()=>{
            if(statusBox.textContent === `Loading ${textForLoading}…`){
                statusBox.textContent = '';
            }
        })
}

selectUsers.addEventListener('change', () => {
    const userId = event.target.value;
    selectAlbums.disabled = true;
    getDataByFetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, allAlbums, 'albums')
        .then(albumsArray => {
            albumsArray.forEach(user => {
                const option = document.createElement('option');
                option.textContent = user.title;
                option.value = user.id;
                selectAlbums.append(option);
            })
        })
    selectAlbums.disabled = false;
});

selectAlbums.addEventListener('change', () => {
    albumId = event.target.value;
    loadBtn.disabled = false;
})

loadBtn.addEventListener('click', () => {
    getDataByFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, allPhotos, 'photos')
        .then(photosArray => {
            console.log(photosArray);
            photosArray.forEach(photo => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('photoWrapper');
                wrapper.innerHTML = `
                                <img src="${photo.thumbnailUrl}" alt="photo">
                                <p>${photo.title.length > 40 ? photo.title.slice(0, 40) + '...' : photo.title}</p>
                                <a href="${photo.url}" target="_blank">“Open” </a>`
                photoBox.append(wrapper);
            })






            // img.src = firstPhoto.thumbnailUrl.replace(
            //     'via.placeholder.com',
            //     'placehold.co'
            // );
        })
})









