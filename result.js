const result= document.getElementById('result');
const names = document.getElementById('name');
const sec = document.getElementById('sec'); 
let localScore = localStorage.getItem('score');
let localfname = localStorage.getItem('fname');
let localmname = localStorage.getItem('mname');
let localsec = localStorage.getItem('section');
let outof = ' / 20';
let fullname = localfname + " "+ localmname;
names.innerText=fullname;
sec.innerText = localsec;
result.innerText = localScore + outof;

