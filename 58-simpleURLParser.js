function simpleURLParser(route, url) {
    const routeParts = route.split("/");
    const urlParts = url.split("/");

    for (let i = 0; i < routeParts.length; i++) {
        if (i >= urlParts.length) {
            return false;
        }

        const routePart = routeParts[i];
        const urlPart = urlParts[i];

        if (routePart.startsWith(":")) {
            if (urlPart.includes("_")) {
                return false;
            }
            continue;
        }

        if (routePart !== urlPart) {
            return false;
        }
    }

    return true;
}

export { simpleURLParser };