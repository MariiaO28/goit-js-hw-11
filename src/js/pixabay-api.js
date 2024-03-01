export function fetchPhotos(getValue) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "42554621-2fa4a31fb360b145b3c1613f4";

    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: getValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
});
    const LINK = `${BASE_URL}?${searchParams}`;

    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
}