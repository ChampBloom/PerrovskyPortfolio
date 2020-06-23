function toggleOpen() {
    let disp = document.querySelector(".content");
    disp.classList.toggle('-hide');
}

function App() {
    let coll = document.getElementsByClassName("project_collapsible")

    for (let i = 0; i < coll.length; i++){
        coll[i].addEventListener('click', toggleOpen);
    }
}


document.addEventListener('DOMContentLoaded', App);

console.log('JSLoaded');