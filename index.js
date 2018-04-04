var flag = document.querySelector("p span");

flag.addEventListener("mouseover", function(){
    this.classList.toggle("highlight");
});

flag.addEventListener("mouseout", function(){
    this.classList.toggle("highlight");
});