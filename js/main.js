function toggleClass(className) {
    const body = document.querySelector("body");
    
    if (!body.classList.contains(className)) {
        body.classList.add(className);
    }
    else {
        body.classList.remove(className);
    }
}

function toggle(){
    toggleClass('displayMenu');
    console.log("toggle called");
}

const buttonElement = document.getElementsByClassName("navbar-menu-button")[0];

buttonElement.addEventListener("click", toggle);