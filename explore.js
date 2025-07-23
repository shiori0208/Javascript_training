//Asynchronous
//Needed for >> Network calls, Time functions, Read/Write files, Userinput

function sayHi() {
    console.log("Say Hi Zoey!");  
}

setTimeout(() => {
    sayHi();
}, 4000);

console.log("BillaChi");
