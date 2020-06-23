function toggleDarkMode() {
    let darkButton = document.getElementById('body');
    darkButton.classList.toggle('-dark');
    console.log(darkButton);
}

function App() {
    let darkMode = document.getElementById('button');

    darkMode.addEventListener('click', toggleDarkMode);

}


document.addEventListener('DOMContentLoaded', App);

console.log('JSLoaded');