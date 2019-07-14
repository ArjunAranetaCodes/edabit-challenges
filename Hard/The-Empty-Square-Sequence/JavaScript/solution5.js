function emptySq(step) {
    totalCells = Math.pow(step*2, 2);
    fullCells = (step * 2) * 2;
    return totalCells - fullCells;
}