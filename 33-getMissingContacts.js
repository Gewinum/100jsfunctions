function getMissingContacts(contactsMap) {
    const contactsMapKeys = Array.from(contactsMap.keys());
    const allMissingContacts = new Map();

    for (let i = 0; i < contactsMapKeys.length; i++) {
        const contactKey = contactsMapKeys[i];
        const contactList = contactsMap.get(contactKey);
        const missingContactList = [];

        for (let j = 0; j < contactsMapKeys.length; j++) {
            if (contactsMapKeys[j] !== contactKey && !contactList.includes(contactsMapKeys[j])) {
                missingContactList.push(contactsMapKeys[j]);
            }
        }

        allMissingContacts.set(contactKey, missingContactList);
    }

    return allMissingContacts;
}

export { getMissingContacts };