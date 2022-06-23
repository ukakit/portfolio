const hamburgerMenu = document.querySelector(".hamburger-menu")

const handler = function (){
    return hamburgerMenu.innerHTML = `<div class="hamburger-menu" style="width: 21px; height: 14px; position: relative; transform: rotate(0deg);"><span style="display: block; height: 2px; width: 100%; background: white; transition-timing-function: ease; transition-duration: 0.4s; border-radius: 0px; transform-origin: center center; position: absolute; transform: translate3d(0px, 7px, 0px) rotate(45deg); margin-top: -1px;"></span><span style="display: block; height: 2px; width: 100%; background: white; transition-timing-function: ease-out; transition-duration: 0.1s; border-radius: 0px; transform-origin: center center; position: absolute; opacity: 0; top: 7px; margin-top: -1px;"></span><span style="display: block; height: 2px; width: 100%; background: white; transition-timing-function: ease; transition-duration: 0.4s; border-radius: 0px; transform-origin: center center; position: absolute; transform: translate3d(0px, 7px, 0px) rotate(-45deg); margin-top: -1px;"></span></div>`
}

hamburgerMenu.addEventListener('click', handler)




const landingName = document.querySelector("#landing-name")

landingName.addEventListener('click', ()=> landingName.classList.toggle('hidden'))

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }