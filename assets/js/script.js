const mask = document.querySelector(".mask");
const nav = document.getElementById("nav");
const showMoreBtn = document.querySelector(".btn-show-more");

const showMask = function(hideMenu){
    if(hideMenu)
        mask.classList.add("hide-menu");
    else mask.classList.remove("hide-menu");
    mask.style.display = "block";
}

const hideMask = function(){
    mask.style.display = "none";
}

let hasSubMenuEles = document.getElementsByClassName("has-submenu");
for(let i=0; i<hasSubMenuEles.length; i++){
    hasSubMenuEles[i].addEventListener("mouseover", function(){
        showMask(0);
    });
    hasSubMenuEles[i].addEventListener("mouseout",hideMask);
}

window.onscroll = function(){
    if(window.scrollY >= 200){
        nav.classList.add("fixed");
    }else{
        nav.classList.remove("fixed");
    }
}

showMoreBtn.addEventListener("click", function(){
    this.classList.toggle("progress");
})