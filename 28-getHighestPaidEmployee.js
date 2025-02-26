function getHighestPaidEmployee(employees, departmentId) {
    let name;
    let salary;

    employees.forEach(employee => {
        if (employee.departmentId !== departmentId) {
            return;
        }

        if (name === undefined) {
            name = employee.name;
            salary = employee.salary;
        } else {
            if (salary < employee.salary) {
                name = employee.name;
                salary = employee.salary;
            }
        }
    });
    return name;
}

export { getHighestPaidEmployee };