function toggleOpen() {
    let disp = document.querySelector(".content");
    disp.classList.toggle('-hide');
}

function toggleDarkMode() {
    let darkButton = document.getElementById('body');
    darkButton.classList.toggle('-dark');
    console.log(darkButton);
}

function App () {
    let coll = document.getElementsByClassName("project_collapsible")

    for (let i = 0; i < coll.length; i++){
        coll[i].addEventListener('click', toggleOpen);
    }

    let darkMode = document.getElementById('button');

    darkMode.addEventListener('click', toggleDarkMode);
}

document.addEventListener('DOMContentLoaded', App);

console.log('JSLoaded');