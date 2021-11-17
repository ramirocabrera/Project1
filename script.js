var count = 0;
var count2 = 0;
var count3 = 0;
var countElement = document.querySelector("#count");
var countElement2 = document.querySelector("#count2");
var countElement3 = document.querySelector("#count3");

function addLike(){
    count++
    countElement.innerText = count;
}

function addLike2(){
    count2++
    countElement2.innerText = count2;
}

function addLike3(){
    count3++
    countElement3.innerText = count3;
}

function removeBtn(element){
    element.remove();
}

function getRecipe(element){
    alert(element.value);
}