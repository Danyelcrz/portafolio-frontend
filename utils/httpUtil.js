async function getData(url) {
    return await fetch(url)
    .then(res => res.json())
    .then(data => data);
}

export { getData };
