"use strict";

var input = document.getElementById('input');
var submit = document.getElementById('submit');
var list = document.getElementById('list');


submit.addEventListener('click', function(){

    if( input.value == ""){
        alert("veuillez remplir le champs !")
    }
    else{
        addListElement();
        input.value ="";
    }

});

function addListElement(){
    let listElements = document.createElement('li')
    listElements.innerHTML = input.value
    list.append(listElements);
}

