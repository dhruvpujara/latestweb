let content = document.querySelector(".content");
let bar = document.querySelector(".bar");
let bardiv = document.querySelector(".bardiv");
let contactus = document.querySelector(".contactus");
let currmode = "light";
let modebtn = document.querySelector(".mdbtn");

// Add error checking and ensure elements exist
if (!bar || !bardiv) {
    console.error("Required elements not found");
} else {
    let barmenu = true;
    bar.addEventListener("click", () => {
        barmenu = !barmenu;
        bardiv.classList.toggle("hidebardiv", !barmenu);
    });
}

// Only add mode button listener if the button exists
if (modebtn) {
    modebtn.addEventListener("click", () => {
        currmode = currmode === "light" ? "dark" : "light";
        content.classList.toggle("img1", currmode === "dark");
        content.classList.toggle("img2", currmode === "light");
    });
}

animes2.forEach((anime2) => {
    let div = document.createElement("div");
    div.classList.add("ANIME2"); 
    div.classList.add("border");
    content.append(div);

    // anime img div
    let aniimgDiv = document.createElement("div");
    div.append(aniimgDiv);
    aniimgDiv.classList.add("aniimg");
    aniimgDiv.style.backgroundImage = `url('${anime2.Image}')`;
 
 
    // play button
    let wtbtn = document.createElement("button");
    div.append(wtbtn);
    wtbtn.innerText = "WATCH";
    wtbtn.classList.add("wtbtn");
    wtbtn.classList.add("ANIME_button");
    wtbtn.classList.add("ANIME_button2");
   
    wtbtn.addEventListener("click", () => {
      const animedet = `/anime-det2.ejs/${anime2.Id}`;
      console.log(animedet);
      document.location.href = animedet;
    });


});
