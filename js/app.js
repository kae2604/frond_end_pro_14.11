'use strict';

let allPhotos = [];
let albumId = null;
let offset = 0;

const statusBox = document.querySelector('#status');
const selectUsers = document.querySelector('#userSelect');
const selectAlbums = document.querySelector('#albumSelect');
const containerForPhoto = document.querySelector('#photos');
const loadBtn = document.querySelector('#loadBtn');
const btnLoadMore = document.querySelector('[data-btn-Load-More ]');

function init(){
    document.addEventListener('DOMContentLoaded', () => {
        getDataByFetch('https://jsonplaceholder.typicode.com/users', 'Users')
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

function getDataByFetch(url, textForLoading){
    statusBox.textContent = `Loading ${textForLoading}…`;
    return fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error("HTTP" + response.status)
            } else {
                return response.json()
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

const renderPhotos = function(array){
    const limitedArray = array.slice(offset, offset + 12);
    limitedArray.forEach(photo => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('photoWrapper');
        wrapper.innerHTML = ` <img src="${photo.thumbnailUrl}" alt="photo">
                                <p>${photo.title.length > 40 ? photo.title.slice(0, 40) + '...' : photo.title}</p>
                                <a href="${photo.url}" target="_blank">“Open” </a>`
        containerForPhoto.append(wrapper);
    })
    offset += limitedArray.length;
    if (offset >= allPhotos.length){
        btnLoadMore.classList.remove('visible');
    }
};

selectUsers.addEventListener('change', (event) => {
    const userId = event.target.value;
    selectAlbums.disabled = true;
    selectAlbums.innerHTML = '<option value="">Select an album …</option>';
    getDataByFetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, 'albums')
        .then(albumsArray => {
            albumsArray.forEach(user => {
                const option = document.createElement('option');
                option.textContent = user.title;
                option.value = user.id;
                selectAlbums.append(option);
            })
            selectAlbums.disabled = false;
        })
    selectAlbums.selectedIndex = 0;
    containerForPhoto.innerHTML = '';
    allPhotos = [];
    albumId = null;
    btnLoadMore.classList.remove('visible');
    loadBtn.disabled = true;
    offset = 0;
});

selectAlbums.addEventListener('change', (event) => {
    albumId = event.target.value;
    if (!albumId){
        loadBtn.disabled = true;
    } else {
        loadBtn.disabled = false;
    }
    containerForPhoto.innerHTML = '';
    btnLoadMore.classList.remove('visible');
    offset = 0;
    allPhotos = [];
})

loadBtn.addEventListener('click', () => {
    getDataByFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, 'photos')
        .then(photosArray => {
            allPhotos = [...photosArray];
            renderPhotos(allPhotos);

            if (allPhotos.length > 12) {
                btnLoadMore.classList.add('visible');
            }
            loadBtn.disabled = true;
        })
});

btnLoadMore.addEventListener('click', () => {
    renderPhotos(allPhotos);
})














