let slides=document.querySelectorAll(".slide");

let index=0;

function carousel(){

slides.forEach(s=>s.style.display="none");

index++;

if(index>slides.length){

index=1;

}

slides[index-1].style.display="block";

setTimeout(carousel,3000);

}

carousel();



document.querySelectorAll(".faq-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

let content=btn.nextElementSibling;

content.style.display=
content.style.display==="block"?"none":"block";

});

});



setTimeout(function(){

document.getElementById("popup").style.display="flex";

},12000);



function closePopup(){

document.getElementById("popup").style.display="none";

}

toggle.onclick = function(){
nav.classList.toggle("active");

if(nav.classList.contains("active")){
toggle.innerHTML="✖";
}else{
toggle.innerHTML="☰";
}
};

