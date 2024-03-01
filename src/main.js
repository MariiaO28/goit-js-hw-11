'use strict';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import icon from "./img/icon.svg";

import { fetchPhotos } from './js/pixabay-api.js';
import { renderPhotos } from './js/render-functions.js';

const searchForm = document.querySelector("form");
const gallery = document.querySelector("ul.gallery");
const loading = document.querySelector("span.loader");

loading.classList.remove("loader");

function submitHandling(event) {
    event.preventDefault(); 
    gallery.innerHTML = null;
    const getValue = event.currentTarget.elements.search.value.trim();

    if (getValue !== "") {
        loading.classList.add("loader");
            fetchPhotos(getValue)
                .then(data => {
                    loading.classList.remove("loader");
                    if (data.hits.length !== 0) {
                        gallery.innerHTML = renderPhotos(data.hits);
                        const lightbox = new SimpleLightbox(".gallery a", {
                            captionsData: "alt",
                            captionDelay: 100,
                        });
                        lightbox.refresh();
                    } else {
                        iziToast.show({
                            iconUrl: icon,
                            message: `Sorry, there are no images matching your search query. Please try again!`,
                            messageColor: "#FFFFFF",
                            color: "#FF6868",
                            position: "topRight",
                            progressBarColor: "#FFFFFF",
                            close: false,
                            timeout: 3000
                        })
                    }
                })
                .catch(error => console.log(error))
        
    };
searchForm.reset();
}

searchForm.addEventListener("submit", submitHandling);

