const btnel=document.querySelector(".btn");
const contentEl=document.querySelector(".content");
const authorEl=document.querySelector(".author");

const apiUrl="http://api.quotable.io/random";
async function getQuote()
{

    try{
        btnel.innerText="Loading..";
        btnel.disabled=true;
        contentEl.innerText="Updating...";
authorEl.style.display="none";
    const response=await fetch(apiUrl);
     btnel.innerText="Get a quote";
     authorEl.style.display="block";
        btnel.disabled=false;
    const data=await response.json();
    contentEl.innerText=data.content;
    authorEl.innerText='~ '+data.author;
    }
    catch{
        contentEl.innerText="An error occured, Try Again later";
       authorEl.style.display="none";
        btnel.innerText="Get a quote";
        btnel.disabled=false;
    }
}
btnel.addEventListener("click",getQuote)