const iconMenu = document.querySelector("#icon");
const menu = document.querySelector("#menu");

const menuStates = {
    open: "bg-menu-open",
    close: "bg-menu-close"
};

iconMenu.addEventListener('click', function(){
    if(iconMenu.classList.contains("bg-menu-open")){
        iconMenu.classList.remove("bg-menu-open");
        iconMenu.classList.add("bg-menu-close");
        menu.classList.remove("opacity-0", "pointer-events-none")
    }else{
        iconMenu.classList.remove(menuStates["close"]);
        iconMenu.classList.add(menuStates["open"]);
        menu.classList.add("opacity-0", "pointer-events-none")
    }
});

window.addEventListener('resize', function(){
    iconMenu.classList.remove(menuStates["close"]);
    iconMenu.classList.add(menuStates["open"]);
    menu.classList.add("opacity-0", "pointer-events-none")
});