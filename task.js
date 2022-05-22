
const largestSum = (array, number) => {

    let largestSum = 0;
    let tempSum = 0;

    if (array.length < number) {
        return 'Error';
    };

    for (let i = 0; i < number; i++) {
        largestSum += array[i];
    };
    tempSum = largestSum;

    for (let i = number; i < array.length; i++) {
        tempSum = tempSum - array[i - number] + array[i];

        if (tempSum > largestSum) {
            largestSum = tempSum;
        };
    };

    return largestSum;
};

console.log(largestSum([24, 14, 14, 15, 17, 18], 3));