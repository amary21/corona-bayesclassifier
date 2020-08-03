import url from "./url.js";
import {animateLoad, animateHome, notFoundState} from "./components/animation.js";
import itemTable from "./components/item-table.js";
import itemChar from "./components/item-char.js";

const fetchApi = (url_param) => {    
    return fetch(url.proxy_url + url.main_url + url_param);
  };
  
const status = (response) => {
    if (response.status !== 200) {
        notFoundState(true);
        animateLoad();
        console.log("Error : " + response.statusText);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

const json = (response) => {
    return response.json();
}

const error = (error) => {
    console.log("Error : " + error);
}

const getTable = (key_search, kategori) => {
    return fetchApi(`?kota=${key_search}&resultOffset=true&kategori=${kategori}&dataTable=true`)
            .then(status)
            .then(json)
}

const getChart = (key_search) => {
    return fetchApi(`?kota=${key_search}&resultOffset=true&dataChart=true`)
    .then(status)
    .then(json)
}

const getSearch = (key_search) => {
    getTable(key_search, "high")
        .then(dataHigh => {
            getTable(key_search, "medium")
            .then(dataMedium => {
                getTable(key_search, "low")
                .then(dataLow => {
                    animateHome(true);
                    animateLoad();
                    itemTable(dataHigh, dataMedium, dataLow);

                    getChart(key_search)
                    .then(dataChart => {
                        itemChar(dataChart);
                    }).catch(error);
                    
                }).catch(error);
            }).catch(error);
        }).catch(error);
}



export {getSearch}