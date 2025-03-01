function customArraySort(users, currentUserId) {
    const sortedUsers = [];
    sortedUsers.push(...users.filter(el => el.id === currentUserId));
    sortedUsers.push(...users.filter(el => el.id !== currentUserId && el.age >= 35 && el.age < 50).sort((a, b) => b.age - a.age));
    sortedUsers.push(...users.filter(el => el.id !== currentUserId && el.age < 18).sort((a, b) => b.age - a.age));
    sortedUsers.push(...users.filter(el => el.id !== currentUserId && el.age >= 50).sort((a, b) => b.age - a.age));
    sortedUsers.push(...users.filter(el => el.id !== currentUserId && el.age >= 18 && el.age < 35).sort((a, b) => b.age - a.age));
    return sortedUsers;
}

export { customArraySort };