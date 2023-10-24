

//อ้างอิง
const display = document.getElementById('display');
const menu = document.getElementById('menu');
const textdisplay = document.querySelector('p')


//event
menu.addEventListener('change',getMenu);
textdisplay.addEventListener('mouseover',hightLight(textdisplay));
textdisplay.addEventListener('mouseout',unhightLight(textdisplay));



function welcome(){
    alert("ยินดีต้อนรับเข้าสู้หน้าเว็บของเรา");
}

function hightLight(obj){
    obj.style.background = "yellow"
}

function unhightLight(obj){
    obj.style.background = "none"
}

function getMenu(){
    console.log(menu.value.toUpperCase());
    display.innerText = menu.value;
}