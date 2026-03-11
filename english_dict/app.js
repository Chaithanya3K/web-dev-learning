const inputEl=document.querySelector(".input");
const infoTextEl=document.getElementById("info-text");
const meaningContainerEl=document.querySelector(".meaning-container");
const titleEl=document.querySelector(".title");
const meaningEl=document.querySelector(".meaning");
const audioEl=document.querySelector("#audio")
async function fetchAPI(word){
    try{
        
        infoTextEl.style.display="block";
        meaningContainerEl.style.display="none";
        
        infoTextEl.innerText=`Searching the meaning of "${word}"`
const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

const res=await fetch(url);
const result=await res.json();
if(result.title)
{
    meaningContainerEl.style.display="block";
    infoTextEl.style.display="none";
    titleEl.innerText=word;
meaningEl.innerText = "Meaning not found";
audioEl.style.display="none";
}
else{

meaningContainerEl.style.display="block";
audioEl.style.display="inline-flex"
titleEl.innerText=result[0].word;
meaningEl.innerText =
result[0]?.meanings[0]?.definitions[0]?.definition || "Meaning not found";

audioEl.src=result[0].phonetics[0].audio;
}
    }
    catch(error){
  infoTextEl.innerText=`An error occured
  Try again later`
    }


}
inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==="Enter")
    {
        fetchAPI(e.target.value)
    } 
})