function getGasolineAmount(distance, consumptionPer100Km) {
    return (distance / 100) * consumptionPer100Km * 2;
}

export { getGasolineAmount };