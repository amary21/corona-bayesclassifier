import {getSearch} from "./api.js";
import {animateHome, animateLoad, notFoundState} from "./components/animation.js";

const main = () => {

    document.addEventListener("DOMContentLoaded", () =>{
        animateHome();
        animateLoad();
        notFoundState();

        const searchInput = document.getElementById("inputSearch");
        const searchButton = document.getElementById("buttonSearch");
        const bodyChar = document.getElementById("body-char");
        const bodyTable = document.getElementById("body-table");

        searchButton.addEventListener("click", () =>{
            if (searchInput.value !== ""){
                bodyTable.style.display = "none";
                bodyChar.style.display = "none";
                getSearch(searchInput.value);
                animateHome(true);
                animateLoad(true);
                notFoundState();
            }
        });

    });
}

export default main;