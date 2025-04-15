

let crbutton = document.querySelector(".crtacc");
let logbody=document.querySelector(".loginbody");
let pg= document.querySelector(".pg")
let hiddendiv= document.querySelector(".hiddendiv");
let code = document.querySelector(".code");
let generateRandomCode = function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".code").textContent = generateRandomCode();
});

let hide = true;

crbutton.addEventListener("click", ()=>{
  if(hide){
    hide = false;
    console.log(hide);
    hiddendiv.classList.remove("hidediv");
    pg.classList.add("hidediv");}
  })

 