async function fetchBranchNames(username, repo) {
    const all = [];

    let i = 1;

    while(true) {
        const response = await fetch("https://api.github.com/repos/" + username + "/" + repo + "/branches?page=" + i + "&per_page=100");
        const body = await response.json();
        if (!Array.isArray(body)) {
            break;
        }

        all.push(...body.map(elem => elem.name));
        i += 1;

        if (body.length !== 100) {
            break;
        }
    }

    return all;
}

export { fetchBranchNames };