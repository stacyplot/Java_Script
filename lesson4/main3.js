"use strict";

//Задание 1.2

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt("Введите текст");
}



function AttachedPost(author, text, date) {
    Post.call(this);
    this.highlights.push(false);
}
