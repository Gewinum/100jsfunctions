function getCheckPassword(password) {
    return (somePassword) => password === somePassword;
}

export { getCheckPassword };