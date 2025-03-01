async function fetchClosedPullRequests(username, repo) {
    const list = [];
    let i = 1;
    while(true) {
        const response = await fetch("https://api.github.com/repos/" + username + "/" + repo + "/pulls?state=closed&page=" + i + "&per_page=100");
        const body = await response.json();
        if (!Array.isArray(body)) {
            break;
        }
        list.push(...body.map(elem => elem.id));
        i += 1;
        if (body.length !== 100) {
            break;
        }
    }

    return list;
}

export { fetchClosedPullRequests };