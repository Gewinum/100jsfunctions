function getMaxMovingDistance(budget, weight, cost) {
    return (budget / (weight / 10) / cost) * 100;
}

export { getMaxMovingDistance };