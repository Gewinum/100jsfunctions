function canDriveCar(user, car) {
    return car.engineSize < 1000 || user.age >= 18;
}

export { canDriveCar };