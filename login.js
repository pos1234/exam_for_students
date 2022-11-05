const fname=document.getElementById('fname');
const mname=document.getElementById('mname');
const submit=document.getElementById('submit');
const section=document.getElementById('section');
submit.addEventListener('click',()=>{
    localStorage.setItem('fname',fname.value);
    localStorage.setItem('mname',mname.value);
    localStorage.setItem('section',section.value);
    window.location.assign('/index.html');
})