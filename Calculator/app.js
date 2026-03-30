const buttonEl=document.querySelectorAll("button");
const inputEl=document.querySelector(".input");

for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener("click",()=>{
      const buttonValue=buttonEl[i].textContent;
      if(buttonValue==='C')
      {
        clearResult();
      }
      else if(buttonValue==='=')
      {
        claculateResult();
      }
      else if(buttonValue==='DEL')
      {
        del(buttonValue)
      }
      else {
        appendValue(buttonValue)
      }
    
      
    })
}

function clearResult(){
inputEl.value="";
}
function claculateResult(){
inputEl.value=eval(inputEl.value)
}
function appendValue(buttonValue)
{
    if(inputEl.value!=='C')
inputEl.value+=buttonValue;
    
}
function del(buttonValue)
{
    inputEl.value=inputEl.value.slice(0,-1);
}