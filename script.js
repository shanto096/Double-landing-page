
const leftImg = document.querySelector(".left");
const rightImg = document.querySelector(".right");


leftImg.addEventListener("mouseenter",function () {
    leftImg.classList.add("w-[75%]","h-full");
    rightImg .classList.remove("w-[75%]");
    leftImg.style.transition =".4s";
     
})

rightImg.addEventListener("mouseenter",function () {
    rightImg .classList.add("w-[75%]","h-full");
    leftImg.classList.remove("w-[75%]");
    rightImg.style.transition =".4s";
   
})
