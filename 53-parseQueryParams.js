function parseQueryParams(url) {
    if (url.indexOf("?") === -1) {
        return new Map();
    }
    return new Map(url.substring(url.indexOf("?") + 1).split("&").map(spl => spl.split("=")));
}

export { parseQueryParams };