'use strict';

const modalWindow = document.querySelector('.wrp');
const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.btn');

closeButton.addEventListener('click', function() {
    modalWindow.classList.add('hidden');
});

openButton.addEventListener('click', function() {
    modalWindow.classList.remove('hidden');
});
