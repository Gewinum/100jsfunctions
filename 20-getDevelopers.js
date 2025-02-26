function getDevelopers(employees) {
    return employees.filter(e => e.job === "developer");
}

export { getDevelopers };