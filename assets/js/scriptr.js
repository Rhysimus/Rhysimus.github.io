function clicked(id){
    var el = document.getElementById(id).children[1];
    if(el.hasAttribute("style")){
        el.removeAttribute("style");
        document.getElementById(id).scrollIntoView();
    }
    else
    {
        el.setAttribute("style","display: none;");
    }
}

function resize() {
    var journey = document.getElementById("journey");
    var projects = document.getElementById("projects");
    var socials = document.getElementById("socials");
    var header = document.getElementById("header");
    journey.classList = "";
    projects.classList = "";
    socials.classList = "";
    journey.classList.add('center');
    projects.classList.add('center');
    socials.classList.add('center');
if(window.innerWidth < 900){
    //all 100
    journey.classList.add('grid100');
    projects.classList.add('grid100');
    socials.classList.add('grid100');
    header.style.fontSize = ((window.innerWidth / 900) * 100).toString() + "px";
    header.style.top = (-((window.innerWidth / 900) * 67)).toString() + "px";
}
else{
    //first 3 30
    journey.classList.add('grid30');
    projects.classList.add('grid30');
    socials.classList.add('grid30');
    header.style.fontSize = "100px";
    header.style.top = "-67px";
}
}