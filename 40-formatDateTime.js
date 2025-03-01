function formatDateTime(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "long",
        timeStyle: "short",
        hourCycle: "h24"
    }).format(date);
}

export { formatDateTime };