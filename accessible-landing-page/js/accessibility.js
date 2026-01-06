let darkMode = document.querySelector(".dark");
let zoomCont = document.querySelector(".zoom-container");
let body = document.querySelector("body");
let font = document.querySelectorAll(
    "a:not(.main-accessibility a), h1:not(.main-accessibility h1), h2:not(.main-accessibility h2), h3:not(.main-accessibility h3), h4:not(.main-accessibility h4), p:not(.main-accessibility p), span:not(.main-accessibility span), input:not(.main-accessibility input), svg:not(.main-accessibility svg)"
);
let accessibilityOption=document.querySelector(".accessibility-options")
let accessibility=document.querySelector("#use")
let moz=document.querySelector(".close")
let fontIn=document.querySelector("#font-in")
let fontOut=document.querySelector("#font-out")
let focus=document.querySelector("#focus")
let zoomIn=document.querySelector("#zoom-in")
let zoomOut=document.querySelector("#zoom-out")
let reset=document.querySelector("#reset")
let num=20
let scaleNum=1
darkMode.addEventListener("click", function () {
    body.classList.toggle("dark-mode"); 
   
});
accessibility.addEventListener("click",()=>{
    accessibilityOption.classList.add("show")
})
moz.addEventListener("click",()=>{
    accessibilityOption.classList.remove("show")
})
focus.addEventListener("click",()=>{
    body.classList.toggle("focus-mode")
})
document.addEventListener("mousemove", (e) => {
        body.style.setProperty("--x", `${e.clientX}px`);
        body.style.setProperty("--y", `${e.clientY}px`);
});
fontIn.addEventListener("click",()=>{
    if(num<26){
        num+=2
    }
    font.forEach(fon => {
        fon.style.fontSize = `${num}px`;
    });
    zoomCont.classList.add("line-fix")
})
fontOut.addEventListener("click",()=>{
    if(num>12){
        num-=2
    }
    font.forEach(fon => {
        fon.style.fontSize = `${num}px`;
    });
})
reset.addEventListener("click",()=>{
   scaleNum=1
   num=18
  zoomCont.style.zoom = scaleNum;
  font.forEach(fon => {
    fon.style.fontSize = `${num}px`;
});
})
zoomIn.addEventListener("click",()=>{
    scaleNum+=0.1
    console.log(scaleNum);
    if(scaleNum<2.2){
            zoomCont.style.zoom = scaleNum;
        };
})
zoomOut.addEventListener("click",()=>{
    scaleNum-=0.1
    if(scaleNum>0.4){
        zoomCont.style.zoom = scaleNum;
    };
})