async function fetchNamesOfAllPublicRepos(username) {
    const response = await fetch("https://api.github.com/users/" + username + "/repos?page=1&per_page=100");
    if (response.status !== 200) {
        return [];
    }

    const body = await response.json();
    return body.map(elem => elem.name);
}

export { fetchNamesOfAllPublicRepos };