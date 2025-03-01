async function fetchGitHubName(username) {
    try {
        const response = await fetch("https://api.github.com/users/" + username)
        if (response.status === 404) {
            return null;
        }
        const jsonResponse = await response.json();
        return jsonResponse.name;
    } catch (e) {
        return null;
    }
}

export { fetchGitHubName };