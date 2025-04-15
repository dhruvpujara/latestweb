document.addEventListener("DOMContentLoaded", () => {

  let contactus = document.querySelector(".contactus");
  let currmode = "light";
  let modebtn = document.querySelector(".mdbtn");
  let content = document.querySelector(".content");
  let bar = document.querySelector(".bar");
  let bardiv = document.querySelector(".bardiv");

  // CONTACT US AND BUG REPORT MECHANISM
  contactus.addEventListener("click", () => {
    alert("contact no 7046056443");
  });

  // mode button mechanism
  modebtn.addEventListener("click", () => {
    if (currmode == "light") {
      currmode = "dark";
      content.classList.remove("img2");
      content.classList.add("img1");
    } else {
      currmode = "light";
      content.classList.remove("img1");
      content.classList.add("img2");
    }
  });

  let barmenu = false;
  bar.addEventListener("click", () => {
    barmenu = !barmenu;
    if (barmenu) {
      bardiv.classList.add("hidebardiv");
    } else {
      bardiv.classList.remove("hidebardiv");
    }
  });

  // Iterate over the animes array from ddlinks.js
  animes.forEach((anime , index) => {
    let div = document.createElement("div");
    div.classList.add("ANIME");
    div.classList.add("border");
    content.append(div);

    // anime img div
    let aniimgDiv = document.createElement("div");
    div.append(aniimgDiv);
    aniimgDiv.classList.add("aniimg");
    aniimgDiv.style.backgroundImage = `url('${anime.Image}')`;

    // play button
    let wtbtn = document.createElement("button");
    div.append(wtbtn);
    wtbtn.innerText = "WATCH";
    wtbtn.classList.add("wtbtn");
    wtbtn.classList.add("ANIME_button");

    wtbtn.addEventListener("click", () => {
      const animedet = `/anime-det/${anime.Id}`;
      document.location.href = animedet;
    });

  });
});