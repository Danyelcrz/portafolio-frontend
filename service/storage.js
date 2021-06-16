export const setCookieValue = (key, value) => {
    localStorage.setItem(key, value);
}

export const getCookieValue = (key) => { return localStorage.getItem(key) }