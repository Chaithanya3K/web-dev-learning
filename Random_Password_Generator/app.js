const btnEl=document.querySelector(".btn");
const inputEl=document.querySelector(".input");
const copyEl=document.querySelector(".fa-copy");
const alertcontainerEl=document.querySelector(".alert-container");

const createPassword=()=>{
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength=14;
    let password="";
    for(let i=0;i<passwordLength;i++)
    {
        const ele=Math.floor(Math.random()*chars.length);
        password+=chars[ele];
    }
    inputEl.value=password;
    alertcontainerEl.innerText="Password Generated";

}


const copy=()=>{
    inputEl.select();
    inputEl.setSelectionRange(0,14);
    navigator.clipboard.writeText(inputEl.value);
    alertcontainerEl.innerText="Password is copied!!";
   
}

btnEl.addEventListener("click",()=>{
createPassword();
    if(inputEl.value){
    alertcontainerEl.classList.remove("active");
    setTimeout(()=>{
        alertcontainerEl.classList.add("active");
    },1000);
}
})
copyEl.addEventListener("click",()=>{
    copy();
    if(inputEl.value){
    alertcontainerEl.classList.remove("active");
    setTimeout(()=>{
        alertcontainerEl.classList.add("active");
    },1000);
}
})