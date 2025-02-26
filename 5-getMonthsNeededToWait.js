function getMonthsNeededToWait(index1, index2) {
    if (index1 > index2) {
        index2 += 12
    }

    return index2 - index1;
}

export { getMonthsNeededToWait };