function book (name,auteur, library) {
this.name= name;
this.auteur= auteur;
this.library=library
};
book1 = new book('history','claude ','ikirezi');
book2 = new book('RWANDA ','hobe','bakae edition');
const head = document.getElementById('head1');
const ourlist = document.getElementById('items');
const title = document.getElementById('id1');
const title1 = document.getElementById('id2');

const items = document.querySelector('.group-item').getElementsByClassName('list-group-item');

for(i =0; i<items.length; i++){
items[i].addEventListener('click', activateitem);
}
 function activateitem(){
 title.innerHTML = this.innerHTML;
 }
title.addEventListener('click', createitem);
title1.addEventListener('click', show);
function createitem(){
ourlist.innerHTML += `<li> this book of  ${book1.name.toUpperCase()} writen by ${book1.auteur} 
has been published by ${book1.library} library </li> `;

}
function show(){
    ourlist.innerHTML += `<li> this book of  ${book2.name.toLowerCase()} writen by ${book2.auteur} 
    has been published by ${book2.library} library </li> `;
    
    }

  