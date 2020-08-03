import url from "../url.js";

const animateHome = (getApi = false)=>{
    const lotHome = document.getElementById("animation-home");
    lotHome.load(url.lottie_home);
    lotHome.setSpeed(2);
    lotHome.style.display = "block";
    if(getApi){
        lotHome.style.display = "none";
    }
}

const animateLoad = (laodApi = false)=>{
    const lotLoad = document.getElementById("animation-loading");
    lotLoad.style.display = "none";
    if(laodApi){
        lotLoad.style.display = "block";
        lotLoad.load(url.lottie_info);
        lotLoad.setSpeed(1);
    }
}

const notFoundState = (data = false) => {
    const notFound = document.getElementById("not-found-state");
    notFound.style.display = "none";
    if(data){
        notFound.style.display = "block";
    }
}

export {animateHome, animateLoad, notFoundState}
