function moveItems(numbers, moveInstructions) {
    moveInstructions.forEach(moveInstruction => {
        if (moveInstruction.fromIndex === moveInstruction.toIndex) {
            return;
        }
        const [deletedElem] = numbers.splice(moveInstruction.fromIndex, 1);
        numbers.splice(moveInstruction.toIndex, 0, deletedElem);
    });
    return numbers;
}

export { moveItems };