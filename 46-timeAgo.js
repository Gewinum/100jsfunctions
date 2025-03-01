function timeAgo(date1, date2) {
    if (date1.valueOf() > date2.valueOf()) {
        [date1, date2] = [date2, date1];
    }
    const diff = (date2.valueOf() - date1.valueOf()) / 1000;

    if (diff < 60) {
        return "just now";
    } else if (diff < 3600) {
        return Math.floor(diff / 60) + " minute" + (Math.floor(diff / 60) !== 1 ? "s" : "") + " ago";
    } else if (diff < 3600 * 24) {
        return Math.floor(diff / 3600) + " hour" + (Math.floor(diff / 3600) !== 1 ? "s" : "") + " ago";
    } else if (diff < 3600 * 24 * 30) {
        return Math.floor(diff / (3600 * 24)) + " day" + (Math.floor(diff / (3600 * 24)) !== 1 ? "s" : "") + " ago";
    } else if (diff < 3600 * 24 * 365) {
        return Math.floor(diff / (3600 * 24 * 30)) + " month" + (Math.floor(diff / (3600 * 24 * 30)) !== 1 ? "s" : "") + " ago";
    } else {
        return "more than a year ago";
    }
}

export { timeAgo };