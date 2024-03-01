export function renderPhotos(array) {
    return array
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `<li class="gallery-item">
                     <a href="${largeImageURL}">
                        <img src="${webformatURL}" alt="${tags}"/>
                        <div class="info-box">
                           <p class="info"><b>Likes</b> ${likes}</p>
                           <p class="info"><b>Views</b> ${views}</p>
                           <p class="info"><b>Comments</b> ${comments}</p>
                           <p class="info"><b>Downloads</b> ${downloads}</p>
                     </div>
                    </a>
                   </li>`;
        })
        .join("");
}
