const btnEl=document.querySelector(".btn");
const animeContainerEl=document.querySelector(".anime-container");
const animeImgEl=document.querySelector(".anime-img");
const animeNameEl=document.querySelector(".anime-name");

const api = "https://api.waifu.pics/sfw/waifu";

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        animeNameEl.innerText="Thinking..."
        animeImgEl.src="./Spinner.png"
        const res=await fetch(api);
        const data=await res.json();
           btnEl.disabled=false;
        btnEl.innerText="Click to see your anime character";
    animeContainerEl.style.display="block";
    animeImgEl.src=data.url;
    animeNameEl.innerText="Guess The Name... ??"
        
    } catch (error) {
        btnEl.disabled=false;
        btnEl.innerText="Try again later , An error occured";
        

        
    }
})