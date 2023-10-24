/*
// ส่วนแสดงผลข้อมูลในเว็บ
document.write("<h1>Tonkla.com</h1>");
document.write("<h1>javascript เบื่องต้น</h1>");
//แจ้งเตือน
alert("Hello");
//แจ้งเตือนใน log
console.log("Hello JavaScript");
console.error("เจอไวรัส")
console.warn("เจอข้อผิดพลาด")
*/

/*
//การสร้างตัวแปร
let name,age; //สร้างตัวแปรแต่ไม่มีการกำหนดค่า
name = "ต้นกล้า" //กำหนดข้อความลงไปเก็บในตัวแปร name
age = 20

console.log(name);
document.write(name);
console.log("age =",age)

const vat = 0.07; //ค่าคงที่
console.log(vat);
*/

/*
//Data type
//typeof เช็คชนิดข้อมูล
//null ไม่กำหนดค่า
//undifined ไม่กำหนดค่า(เป็นค่าเริ่มต้นโปรแกรม)
let x,y;
x = 20;//integer
y = 20.15;//float

//string
let a = 'Tonkla';
let b = "Nuchi";

//Ex
let money = 500 + 500// number(integer)
let price = 99.99; //number(float)

let message = 'tonkla';

let checkname = false;
console.log(money);
console.log(typeof(money));
console.log(price);
console.log(typeof(price));
console.log(message);
console.log(typeof(message));
console.log (typeof(checknamename))
*/

/*
//Type Conversion
//string to number: parseInt(''),parseFloat('')
let age = parseInt("20.15");
console.log(typeof(age));
console.log(age);

let age2 = parseFloat("20.15");
console.log(typeof(age2));
console.log(age2);

//number to string: x.toString()
let x = 99.99+""
console.log(typeof(x));
console.log(x);

let y = 99.99.toString()
console.log(typeof(y));
console.log(y);
*/

/*
//Array
//วิธีที่1
let number = Array(1,"2",3.23,true,5,6);
console.log(number);
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);

//วีธีที่2
let colors = ["แดง","เขียว","ขาว"]
console.log(colors)
colors[1] = "ชมพู"
console.log(colors)
*/

//ยกกำลัง x**y : x^y

/*
//เงื่อนไข
age = 20;
if(age == 20){
    console.log("นาย / นางสาว");
}

//ลดรูป ตัวแปร = (เงื่อนไข)? true : false
pass = age == 20?"true":"false"
console.log(pass)

//switch case
let status = 0;
let light;
switch(status){
    case 0 : light = "ปิดไฟ";
        break;
    case 1 : light = "เปิดไฟ";
        break;
    default : light = "ไม่พบข้อมูล"
}
console.log(light)
*/

/*
//confirm
function DeleteData(){
    let check = confirm("คุณต้องการลบข้อมูลหรือไม่")
    if(check == true){
        document.write("ลบข้อมูลแล้ว")
    }
    else{
        document.write("ยกเลิกการลบข้อมูล")
    }
}
*/

/*
//classList 
const box = document.getElementById('box');
let status;

function addDarkMode(){
    box.classList.add("darkMode");
}

function removeDarkMode(){
    box.classList.remove("darkMode");
}

function switchDarkMode(){
    box.classList.toggle("darkMode");
    status = box.classList.contains("darkMode");
    console.log(status);
    if(status){
        box.style.color = "yellow";
    }
    else{
        box.style.color = "red";
    }
}
*/